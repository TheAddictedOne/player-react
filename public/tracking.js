(function() {
  // Declarations
  const CATEGORY_VITALS = 'vitals'
  const IFRAME_REQUESTED = 'iframe_requested'
  const IFRAME_STARTS = 'iframe_starts'

  let lastMark = IFRAME_REQUESTED

  function vitals(name) {
    const mark = performance.mark(name)
    mark.category = CATEGORY_VITALS
    console.log(mark)
  }

  function observerCallback(list) {
    list.getEntries().forEach((entry) => {
      performance.measure(
        `${lastMark} to ${entry.name}`,
        lastMark === IFRAME_REQUESTED ? undefined : lastMark,
        entry.name
      )
      lastMark = entry.name
    })
  }

  function log() {
    const table = []
    performance.getEntries().forEach(({ category, name, startTime }) => {
      if (category !== CATEGORY_VITALS) return

      table.push({ name, startTime })
    })
    console.table(table)
  }

  // Execution
  new PerformanceObserver(observerCallback).observe({ type: 'mark' })
  vitals(IFRAME_STARTS)

  // Export
  window.tracking = { vitals, log }
})()

(function() {
  // Declarations
  const CATEGORY_VITALS = 'vitals'

  const IFRAME_REQUESTED = 'iframe_requested'

  let lastMark = IFRAME_REQUESTED

  function mark(category, name) {
    const mark = performance.mark(name)
    mark.category = category
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

  function log(filter = ['vitals']) {
    const table = [{ name: IFRAME_REQUESTED, 'duration (ms)': 0 }]
    performance.getEntries().forEach(({ category, name, startTime }) => {
      if (!filter.includes(category)) return

      table.push({ name, 'duration (ms)': Math.round(startTime) })
    })
    console.table(table)
  }

  // Execution
  new PerformanceObserver(observerCallback).observe({ type: 'mark' })
  mark(CATEGORY_VITALS, 'iframe_starts')

  // Export
  window.tracking = { mark, log }
})()

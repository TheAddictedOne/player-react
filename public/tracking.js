(function() {
  // Declarations
  const IFRAME_REQUESTED = 'iframe_requested'

  let lastMark = IFRAME_REQUESTED

  function vitals(name) {
    performance.mark(name)
  }

  function observerCallback(list) {
    list.getEntries().forEach((entry) => {
      performance.measure(
        `${lastMark}-to-${entry.name}`,
        lastMark === IFRAME_REQUESTED ? undefined : lastMark,
        entry.name
      )
      lastMark = entry.name
    })
  }

  // Execution
  new PerformanceObserver(observerCallback).observe({ type: 'mark' })
  vitals('iframe_starts')

  // Export
  window.tracking = { vitals }
})()

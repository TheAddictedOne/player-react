(function() {
  const v = document.createElement('video')
  v.src = "videos/x7x43zv.mp4"
  v.play()
    .then(() => window.autoplay = 'Allowed')
    .catch(() => {
      v.muted = true
      return v.play()
        .then(() => window.autoplay = 'Allowed muted')
        .catch(() => window.autoplay = 'Rejected')
    })
    .finally(() => v.src = null)
})()

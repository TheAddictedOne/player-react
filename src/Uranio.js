import Loading from 'Loading.js'
import React, { Suspense, useEffect } from 'react'
import useMedia from 'hooks/useMedia.js'
import 'Uranio.css'

function Uranio() {
  const [MediaScreen, src] = useMedia()

  useEffect(() => {
    window.tracking.mark('technical', 'player_ready')
  }, [])

  if (!MediaScreen) {
    return (
      <div className="Uranio">
        <img src="/logo.png" alt="Dailymotion logo" />
        <h1>Empty player</h1>
      </div>
    )
  }

  return (
    <div className="Uranio">
      <Suspense fallback={<Loading />}>
        <MediaScreen src={src} />
      </Suspense>
    </div>
  )
}

export default Uranio

import EmptyPlayer from "EmptyPlayer.js"
import Loading from 'Loading.js'
import React, { Suspense, useEffect } from 'react'
import useMedia from 'useMedia.js'
import 'App.css'

function App() {
  const [Media, src] = useMedia()

  useEffect(() => {
    window.tracking.mark('technical', 'player_ready')
  }, [])

  if (!Media) {
    return (
      <div className="App">
        <EmptyPlayer />
      </div>
    )
  }

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Media src={src} />
      </Suspense>
    </div>
  )
}

export default App

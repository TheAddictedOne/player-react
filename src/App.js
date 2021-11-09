import EmptyPlayer from "EmptyPlayer.js"
import Loading from 'Loading.js'
import React, { Suspense } from 'react'
import useMedia from 'useMedia.js'
import 'App.css'

function App() {
  const [Media, src] = useMedia()

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

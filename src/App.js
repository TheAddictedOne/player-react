import React, { Suspense } from 'react'
import useMedia from 'useMedia.js'
import 'App.css'

function App() {
  const [Media, src] = useMedia()

  return (
    <div className="App">
      <Suspense fallback={<div>Suspense loading...</div>}>
        {Media ? <Media src={src} /> : null}
      </Suspense>
    </div>
  )
}

export default App

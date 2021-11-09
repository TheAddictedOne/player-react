import React, { Suspense } from 'react'
import useMedia from 'useMedia.js'
import 'App.css'

function App() {
  const Media = useMedia()

  return (
    <div className="App">
      <Suspense fallback={<div>Suspense loading...</div>}>
        {Media ? <Media /> : null}
      </Suspense>
    </div>
  )
}

export default App

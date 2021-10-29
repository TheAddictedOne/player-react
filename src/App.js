import React, { Suspense } from 'react'
import 'App.css'

const video = false

const Media = video
  ? React.lazy(() => import(/* webpackChunkName: "video" */ 'Video.js'))
  : React.lazy(() => import(/* webpackChunkName: "audio" */ 'Audio.js'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>...</div>}>
        <Media />
      </Suspense>
    </div>
  )
}

export default App

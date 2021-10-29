import React, { Suspense } from 'react'
import './App.css'

const video = false

const Media = video
  ? React.lazy(() => import('./Video.js'))
  : React.lazy(() => import('./Audio.js'))

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

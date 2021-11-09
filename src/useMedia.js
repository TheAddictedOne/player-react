import React, { useState, useEffect } from 'react'

const MEDIA_VIDEO = 'video'
const MEDIA_AUDIO = 'audio'

function useMedia() {
  const [Media, setMedia] = useState(null)

  useEffect(() => {
    console.warn('useLoad initialised')
    window.addEventListener('message', (event) => {
      console.log('Command received', event)
      switch (event.data.type) {
        case MEDIA_VIDEO:
          console.log('Loading video...')
          setMedia(React.lazy(() => import(/* webpackChunkName: "video" */ 'Video.js')))
          break

        case MEDIA_AUDIO:
          console.log('Loading audio...')
          setMedia(React.lazy(() => import(/* webpackChunkName: "audio" */ 'Audio.js')))
          break

        default:
          console.log('Unrecognized command')
          setMedia(null)
      }
    })
  }, [])

  return Media
}

export default useMedia

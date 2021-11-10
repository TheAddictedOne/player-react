import React, { useState, useEffect } from 'react'

const MEDIA_VIDEO = 'video'
const MEDIA_AUDIO = 'audio'

function useMedia() {
  const [MediaScreen, setMedia] = useState(null)
  const [src, setSrc] = useState(null)

  useEffect(() => {
    window.addEventListener('message', (event) => {
      switch (event.data.type) {
        case MEDIA_VIDEO:
          setMedia(React.lazy(() => import(/* webpackChunkName: "video" */ 'video/VideoScreen.js')))
          setSrc(event.data.src)
          break

        case MEDIA_AUDIO:
          setMedia(React.lazy(() => import(/* webpackChunkName: "audio" */ 'audio/AudioScreen.js')))
          setSrc(event.data.src)
          break

        default:
          setMedia(null)
          setSrc(null)
      }
    })
  }, [])

  return [MediaScreen, src]
}

export default useMedia

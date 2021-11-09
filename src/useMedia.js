import React, { useState, useEffect } from 'react'

const MEDIA_VIDEO = 'video'
const MEDIA_AUDIO = 'audio'

function useMedia() {
  const [Media, setMedia] = useState(null)
  const [src, setSrc] = useState(null)

  useEffect(() => {
    window.addEventListener('message', (event) => {
      switch (event.data.type) {
        case MEDIA_VIDEO:
          setMedia(React.lazy(() => import(/* webpackChunkName: "video" */ 'Video.js')))
          setSrc(event.data.src)
          break

        case MEDIA_AUDIO:
          setMedia(React.lazy(() => import(/* webpackChunkName: "audio" */ 'Audio.js')))
          setSrc(event.data.src)
          break

        default:
          setMedia(null)
          setSrc(null)
      }
    })
  }, [])

  return [Media, src]
}

export default useMedia

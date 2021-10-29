import { useRef, useEffect } from 'react'
import 'Video.css'

function Video() {
  const video = useRef(null)

  useEffect(() => {
    video.current.addEventListener('play', () => window.tracking.vitals('video_starts'), { once: true })
  }, [])

  return <video ref={video} controls src="/x7x43zv.mp4"></video>
}

export default Video

import { useRef, useEffect } from 'react'
import 'Video.css'

function onPlay() {
  window.tracking.vitals('video_starts')
  window.tracking.log()
}

function Video() {
  const video = useRef(null)

  useEffect(() => {
    window.tracking.vitals('player_ready')
    video.current.addEventListener('play', onPlay, { once: true })
  }, [])

  return <video ref={video} controls src="/x7x43zv.mp4"></video>
}

export default Video

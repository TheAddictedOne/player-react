import { useRef, useEffect } from 'react'
import 'Video.css'

function onPlay() {
  window.tracking.vitals('video_starts')
  window.tracking.log()
}

function Video(props) {
  const video = useRef(null)

  useEffect(() => {
    video.current.addEventListener('play', onPlay, { once: true })
  }, [])

  return <video ref={video} controls src={`/videos/${props.src}.mp4`}></video>
}

export default Video

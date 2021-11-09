import { useRef, useEffect } from 'react'
import 'Video.css'

function onClick() {
  window.tracking.mark('vitals', 'playback_starts')
  this.play()
}

function onPlay() {
  window.tracking.mark('vitals', 'video_starts')
  window.tracking.log()
}

function Video(props) {
  const video = useRef(null)

  useEffect(() => {
    video.current.addEventListener('click', onClick, { once: true })
    video.current.addEventListener('play', onPlay, { once: true })
  }, [])

  return <video ref={video} src={`/videos/${props.src}.mp4`}></video>
}

export default Video

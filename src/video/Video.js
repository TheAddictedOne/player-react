import { useRef, useEffect } from 'react'
import 'video/Video.css'

function Video(props) {
  const video = useRef(null)

  function onPlay() {
    window.tracking.mark('vitals', 'video_starts')
    window.tracking.log()
  }

  useEffect(() => {
    video.current.addEventListener('play', onPlay, { once: true })
  }, [])

  return <video ref={video} src={`videos/${props.src}.mp4`} autoPlay controls></video>
}

export default Video

import { useRef, useEffect } from 'react'
import 'audio/Audio.css'

function Audio(props) {
  const audio = useRef(null)

  function onPlay() {
    window.tracking.mark('vitals', 'audio_starts')
    window.tracking.log()
  }

  useEffect(() => {
    audio.current.addEventListener('play', onPlay, { once: true })
  }, [])

  return <audio ref={audio} src={`audios/${props.src}.mp3`} autoPlay controls></audio>
}

export default Audio

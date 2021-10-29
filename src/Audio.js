import { useRef, useEffect } from 'react'
import 'Audio.css'

function Audio() {
  const audio = useRef(null)

  useEffect(() => {
    audio.current.addEventListener('play', () => window.tracking.vitals('audio_starts'), { once: true })
  }, [])

  return <audio ref={audio} controls src="/acoustic.mp3"></audio>
}

export default Audio

import { useRef, useEffect } from 'react'
import 'Audio.css'

function onPlay() {
  window.tracking.vitals('audio_starts')
  window.tracking.log()
}

function Audio() {
  const audio = useRef(null)

  useEffect(() => {
    window.tracking.vitals('player_ready')
    audio.current.addEventListener('play', onPlay, { once: true })
  }, [])

  return <audio ref={audio} controls src="/acoustic.mp3"></audio>
}

export default Audio

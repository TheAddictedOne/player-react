import { useRef, useEffect } from 'react'
import 'Audio.css'

function onPlay() {
  window.tracking.vitals('audio_starts')
  window.tracking.log()
}

function Audio(props) {
  const audio = useRef(null)

  useEffect(() => {
    audio.current.addEventListener('play', onPlay, { once: true })
  }, [])

  return <audio ref={audio} controls src={`/audios/${props.src}.mp3`}></audio>
}

export default Audio

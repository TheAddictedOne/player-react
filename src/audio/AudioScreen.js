import 'audio/AudioScreen.css'
import Audio from 'audio/Audio.js'
import { useState } from 'react'

function Startscreen(props) {
  const [clicked, setClicked] = useState(false)

  function onClick() {
    window.tracking.mark('vitals', 'audio_requested')
    setClicked(true)
  }

  if (clicked) {
    return (
      <div className="AudioScreen">
        <Audio src={props.src} />
      </div>
    )
  }

  return (
    <div className="AudioScreen">
      <img src={`posters/${props.src}.jpeg`} alt="poster" />
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <path
          d="M8.56047 5.09337C8.34001 4.9668 8.07015 4.96875 7.85254 5.10019C7.63398 5.23162 7.5 5.47113 7.5 5.73011L7.5 18.2698C7.5 18.5298 7.63398 18.7693 7.85254 18.9007C7.96372 18.9669 8.0882 19 8.21268 19C8.33241 19 8.45309 18.9688 8.56047 18.9075L18.1351 12.6377C18.3603 12.5082 18.5 12.2648 18.5 12C18.5 11.7361 18.3603 11.4917 18.1351 11.3632L8.56047 5.09337Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export default Startscreen

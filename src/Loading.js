import { useEffect } from 'react'
import 'Loading.css'

function Loading() {
  useEffect(() => {
    window.tracking.mark('vitals', 'first_meaningful_content')
  }, [])
  
  return <h1 className="dotdotdot">Loading</h1>
}

export default Loading

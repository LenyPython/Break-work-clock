import React from 'react'


const Timer = ({timeLeft}) => {
  return (
    <div id='timer-label'>
      <h2>Session</h2>
      <p id='time-left'> {timeLeft} </p>
      <button id='start_stop'>Play/Pause</button>
      <button id='reset'>reset</button>
    </div>
  )
}

export default Timer;

import React from 'react'
import './timer.css'


const Timer = ({pause, session, setPause, setSession}) => {
  let sessionDuration = session
  let breakDuration = pause
  let seconds = 0
  let sessionTime = true
  var countDown

  const handlePlayPause = event => {
    let command = event.target.innerText
    let timeLeft
    if (command === 'PLAY >') {
      event.target.innerText = 'PAUSE ||'
      countDown = setInterval(() => {
        if (sessionTime) {
          if (seconds === 0) {
            sessionDuration -= 1
            seconds = 60
          }
          seconds -= 1
          timeLeft = `${sessionDuration < 10 ? '0' + sessionDuration : sessionDuration}:${seconds < 10 ? '0' + seconds : seconds}`
          document.querySelector('#name-label').innerText = 'Session'
          if (sessionDuration === 0 && seconds === 0) sessionTime = false
        } else {
          if (seconds === 0) {
            breakDuration -= 1
            seconds = 60
          }
          seconds -= 1
          timeLeft = `${breakDuration < 10 ? '0' + breakDuration : breakDuration}:${seconds < 10 ? '0' + seconds : seconds}`
          document.querySelector('#name-label').innerText = 'Break Time'
        }

        document.querySelector('#time-left').innerText = timeLeft
      }, 1000)
    } else {
      event.target.innerText = 'PLAY >'
      clearInterval(countDown)
    }
  }

  const handleReset = () => {
    clearInterval(countDown)
    setPause(5)
    setSession(25)
    seconds = 0
    sessionTime = true
    document.querySelector('#start_stop').innerText = 'PLAY >'
    document.querySelector('#time-left').innerText = '25:00'
    document.querySelector('#name-label').innerText = 'Session'
  }

  return (
    <div id='timer-label'>
      <h2 id='name-label'>Session</h2>
      <p id='time-left'>
        {`${sessionDuration < 10 ? '0' + sessionDuration : sessionDuration}:${seconds < 10 ? '0' + seconds : seconds}`}
      </p>
      <div>
        <button id='start_stop' onClick={handlePlayPause}>Play ></button>
        <button id='reset' onClick={handleReset}>reset</button>
      </div>
    </div>
  )
}

export default Timer;

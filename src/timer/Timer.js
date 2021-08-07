import React from 'react'
import './timer.css'
import {
  RESET,
  setSessionId
} from '../state/State'


const Timer = ({state, dispatch}) => {
  let sessionDuration = state.sessionTime
  let breakDuration = state.breakTime
  let sessionTime = state.sessionState
  let seconds = 0

  const handlePlayPause = event => {
    let command = event.target.innerText
    let timeLeft
    if (command === 'PLAY >') {
      event.target.innerText = 'PAUSE ||'
      let countDown = setInterval(() => {
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
      dispatch({type: setSessionId, payload: countDown})
    } else {
      event.target.innerText = 'PLAY >'
      clearInterval(state.sessionId)
    }
  }

  const handleReset = () => {
    clearInterval(state.sessionId)
    dispatch({type: RESET})
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

import React from 'react'
import startCountDown from './startCountDown'
import './timer.css'
import {
  RESET,
  setSessionId,
  setSessionState
} from '../state/State'


const Timer = ({state, dispatch}) => {
  let sessionTime = state.sessionTime
  let breakTime = state.breakTime
  let sessionState = state.sessionState

  const handlePlayPause = event => {
    let command = event.target.innerText
    if (command === 'PLAY >') {
      event.target.innerText = 'PAUSE ||'
      let countDown = startCountDown(sessionTime, breakTime, sessionState, dispatch)
      dispatch({type: setSessionId, payload: countDown})
    } else {
      event.target.innerText = 'PLAY >'
      clearInterval(state.sessionId)
    }
  }

  const handleReset = () => {
    clearInterval(state.sessionId)
    dispatch({type: RESET})
    document.querySelector('#start_stop').innerText = 'PLAY >'
    document.querySelector('#time-left').innerText = '25:00'
    document.querySelector('#name-label').innerText = 'Session'
  }

  return (
    <div id='timer-label'>
      <h2 id='name-label'>Session</h2>
      <p id='time-left'>
        {`${sessionTime < 10 ? '0' + sessionTime : sessionTime}:00`}
      </p>
      <div>
        <button id='start_stop' onClick={handlePlayPause}>Play ></button>
        <button id='reset' onClick={handleReset}>reset</button>
      </div>
    </div>
  )
}

export default Timer;


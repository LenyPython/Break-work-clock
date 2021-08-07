import React from 'react'
import startCountDown from './startCountDown'
import './timer.css'
import {
  RESET,
  setControls,
  setSessionId,
} from '../state/State'


const Timer = ({state, dispatch}) => {
  let sessionTime = state.sessionTime

  const handlePlayPause = event => {
    let command = event.target.innerText
    if (command === 'PLAY >') {
      event.target.innerText = 'PAUSE ||'
      let countDown = startCountDown()
      dispatch({type: setSessionId, payload: countDown})
      dispatch({type: setControls, payload: true})
    } else {
      event.target.innerText = 'PLAY >'
      clearInterval(state.sessionId)
      dispatch({type: setControls, payload: false})
    }
  }

  const handleReset = () => {
    clearInterval(state.sessionId)
    dispatch({type: RESET})
    document.querySelector('#start_stop').innerText = 'PLAY >'
    document.querySelector('#time-left').innerText = '25:00'
    document.querySelector('#timer-label').innerText = 'Session'
    document.querySelector('#time-left').classList.remove('red')
    document.querySelector('#beep').pause()
    document.querySelector('#beep').currentTime = 0
  }

  return (
    <div id='timer'>
      <h2 id='timer-label'>Session</h2>
      <p id='time-left'>
        {`${sessionTime < 10 ? '0' + sessionTime : sessionTime}:00`}
      </p>
      <div>
        <button id='start_stop' onClick={handlePlayPause}>Play ></button>
        <button id='reset' onClick={handleReset}>reset</button>
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  )
}

export default Timer;


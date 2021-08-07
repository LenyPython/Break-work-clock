import React from 'react'
import './controls.css'
import {
  setBreakTime,
  setSessionTime
} from '../state/State'

const Controls = ({state, dispatch}) => {
  let pause = state.breakTime
  let session = state.sessionTime

  const handlePause = event => {
    if (event.target.innerText === '^') {
      if (pause < 60) dispatch({type: setBreakTime, payload: pause + 1})
    }
    else if (pause > 0) dispatch({type: setBreakTime, payload: pause - 1})
  }


  const handleSession = event => {
    if (event.target.innerText === '^') {
      if (session < 60) dispatch({type: setSessionTime, payload: session + 1})
    }
    else if (session > 0) dispatch({type: setSessionTime, payload: session - 1})
  }


  return (
    <div id='controler'>
      <div id='break-label'>
        <h2>Break Length</h2>
        <div>
          <button id='break-increment' onClick={handlePause}>^</button>
          <p id='break-length'>{pause}</p>
          <button id='break-decrement' onClick={handlePause}>v</button>
        </div>
      </div>
      <div id='session-label'>
        <h2>Session Length</h2>
        <div>
          <button id='session-increment' onClick={handleSession}>^</button>
          <p id='session-length'>{session}</p>
          <button id='session-decrement' onClick={handleSession}>v</button>
        </div>
      </div>

    </div>
  )
}

export default Controls;

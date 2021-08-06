import React from 'react'
import './controls.css'

const Controls = ({pause, session, setPause, setSession}) => {
  const handlePause = event => {
    if (event.target.innerText === '^') setPause(pause + 1);
    else if (pause > 0) setPause(pause - 1)
  }
  const handleSession = event => {
    if (event.target.innerText === '^') setSession(session + 1);
    else if (pause > 0) setSession(session - 1)
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

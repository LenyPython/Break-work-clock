import './App.css';
import {useReducer} from 'react'
import Timer from './timer/Timer'
import Controls from './controls/Controls'
import {reducer, basicState} from './state/State'

const App = () => {
  const [state, dispatch] = useReducer(reducer, basicState)
  return (
    <div className="App">
      <header>
        <h1>Work Break Time</h1>
      </header>
      <Controls
        state={state}
        dispatch={dispatch}
      />
      <Timer
        state={state}
        dispatch={dispatch}
      />
      <footer>
        <h4>Made by <span>Piotr Lenartowicz</span></h4>
      </footer>

    </div>
  );
}

export default App;

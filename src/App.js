import './App.css';
import {useReducer, useEffect} from 'react'
import Timer from './timer/Timer'
import Controls from './controls/Controls'
import {reducer, basicState} from './state/State'

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [])

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

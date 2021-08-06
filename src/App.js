import './App.css';
import {useState} from 'react'
import Timer from './timer/Timer'
import Controls from './controls/Controls'

const App = () => {
  const [pause, setPause] = useState(5);
  const [session, setSession] = useState(25);
  return (
    <div className="App">
      <header>
        <h1>Work Break Time</h1>
      </header>
      <Controls
        setPause={setPause}
        setSession={setSession}
        pause={pause}
        session={session}
      />
      <Timer
        pause={pause}
        session={session}
      />
      <footer>
        <h4>Made by <span>Piotr Lenartowicz</span></h4>
      </footer>

    </div>
  );
}

export default App;

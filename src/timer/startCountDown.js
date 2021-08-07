import {setSessionState} from '../state/State'

const startCountDown = (sessionTime, breakTime, isSessionTime, dispatch) => {
  let timeArray = document.querySelector('#time-left').innerText.split(':')
  let minutes = parseInt(timeArray[0])
  let seconds = parseInt(timeArray[1])
  let timeLeft

  const changeToBreak = () => {
    document.querySelector('#name-label').innerText = 'Break Time'
    dispatch({type: setSessionState, payload: false})
    minutes = breakTime
    seconds = 0
  }

  const changeToSession = () => {
    document.querySelector('#name-label').innerText = 'Session'
    dispatch({type: setSessionState, payload: true})
    minutes = sessionTime
    seconds = 0
  }

  let countDown = action => {
    if (seconds === 0) {
      minutes -= 1
      seconds = 60
    }
    seconds -= 1
    timeLeft = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    if (minutes === 0 && seconds === 0) action()
  }


  let intervalID = setInterval(() => {
    if (isSessionTime) countDown(changeToBreak)
    else countDown(changeToSession)
    document.querySelector('#time-left').innerText = timeLeft
  }, 1000)
  return intervalID
}

export default startCountDown;

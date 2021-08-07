
const startCountDown = () => {
  let timeArray = document.querySelector('#time-left').innerText.split(':')
  let minutes = parseInt(timeArray[0])
  let seconds = parseInt(timeArray[1])
  let isSessionTime = true
  let timeLeft

  const changeToBreak = () => {
    document.querySelector('#timer-label').innerText = 'Break Time'
    document.querySelector('#beep').play()
    document.querySelector('#time-left').classList.remove('red')
    minutes = document.querySelector('#break-length').innerText
    seconds = 1
    isSessionTime = false
  }

  const changeToSession = () => {
    document.querySelector('#timer-label').innerText = 'Session'
    document.querySelector('#beep').play()
    document.querySelector('#time-left').classList.remove('red')
    minutes = document.querySelector('#session-length').innerText
    seconds = 1
    isSessionTime = true
  }

  let countDown = changeToBreakOrSession => {
    if (seconds === 0) {
      minutes -= 1
      seconds = 60
    }
    seconds -= 1
    if (minutes < 1) document.querySelector('#time-left').classList.add('red')
    timeLeft = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    if (minutes === 0 && seconds === 0) changeToBreakOrSession()
  }


  let intervalID = setInterval(() => {
    if (isSessionTime) countDown(changeToBreak)
    else countDown(changeToSession)
    document.querySelector('#time-left').innerText = timeLeft
  }, 1000)
  return intervalID
}

export default startCountDown;

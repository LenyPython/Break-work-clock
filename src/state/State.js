const setBreakTime = 'BreakTime'
const setSessionTime = 'SessionTime'
const setSessionId = 'SessionId'
const setControls = 'Controls'
const RESET = 'reset'

const basicState = {
  breakTime: 5,
  sessionTime: 25,
  sessionId: '',
  blockControls: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case setBreakTime:
      return {...state, breakTime: action.payload}
    case setSessionTime:
      return {...state, sessionTime: action.payload}
    case setSessionId:
      return {...state, sessionId: action.payload}
    case setControls:
      return {...state, blockControls: action.payload}
    case RESET:
      return basicState
    default:
      return state
  }

}

export {
  reducer,
  basicState,
  RESET,
  setControls,
  setBreakTime,
  setSessionId,
  setSessionTime
};



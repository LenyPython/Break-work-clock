const setBreakTime = 'BreakTime'
const setSessionTime = 'SessionTime'
const setSessionId = 'SessionId'
const setSessionState = 'SessionState'
const RESET = 'reset'

const basicState = {
  breakTime: 5,
  sessionTime: 25,
  sessionId: '',
  sessionState: true
}

const reducer = (state, action) => {
  switch (action.type) {
    case setBreakTime:
      return {...state, breakTime: action.payload}
    case setSessionTime:
      return {...state, sessionTime: action.payload}
    case setSessionId:
      return {...state, sessionId: action.payload}
    case setSessionState:
      return {...state, sessionState: action.payload}
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
  setBreakTime,
  setSessionState,
  setSessionId,
  setSessionTime
};



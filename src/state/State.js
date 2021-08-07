const setBreakTime = 'BreakTime'
const setSessionTime = 'SessionTime'
const setSessionId = 'SessionId'
const setSessionState = 'SessionState'

const state = {
  breakTime: 5,
  sessionTime: 25,
  sessionId: '',
  sessionState: false
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
  }

}

export {
  reducer,
  state,
  setBreakTime,
  setSessionState,
  setSessionId,
  setSessionTime
};



const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GOOD':
      const goodCount = action.data
      const updatedGoodCount = {
        ...state,
        good: goodCount
      }
      return updatedGoodCount
    case 'OK':
      const okCount = action.data
      const updatedOkCount = {
        ...state,
        ok: okCount
      }
      return updatedOkCount
    case 'BAD':
      const badCount = action.data
      const updatedBadCount = {
        ...state,
        bad: badCount
      }
      return updatedBadCount
    case 'ZERO':
      const updatedCount = {
        ...initialState
      }
      return updatedCount
    default: 
      return state
  }
}

export default counterReducer
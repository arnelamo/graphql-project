
const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        currentBook: action.payload
      }
    default:
      return state
  }
}

export default Reducer

const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        currentBook: action.payload
      }
    case 'GET_BOOK':
      return {
        ...state,
        currentBook: action.payload
      }
    case 'DELETE_BOOK':
      return {
        ...state,
        currentBook: action.payload
      }
    case 'ADD_OPERATION':
      return {
        ...state,
        operation: action.payload
      }
    default:
      return state
  }
}

export default Reducer
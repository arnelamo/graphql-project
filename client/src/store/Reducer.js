import { updateState } from '../utils/helpers'

const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK': return updateState(state, action.payload)
    case 'GET_BOOK': return updateState(state, action.payload)
    case 'DELETE_BOOK': return updateState(state, action.payload)
    default:
      return state
  }
}

export default Reducer
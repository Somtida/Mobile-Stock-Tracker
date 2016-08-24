import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  input: null
})


const input = (state, action) =>
  state.merge({ input: action.input })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.SEARCHINPUT]: input,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)

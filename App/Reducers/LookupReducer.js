import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  input: '',
  results: [],
  fetching: false,
  error: null,
})

// request temp
const request = (state, action) =>
  state.merge({
    fetching: true,
    input: action.input,
  })

// receive temp
const receive = (state, action) =>
  state.merge({
    fetching: false,
    error: null,
    results: action.results
  })

// temp failure
const failure = (state, action) =>
  state.merge({
    fetching: false,
    error: true,
    results: []
  })

// map our types to our handlers
const ACTION_HANDLERS = {
    [Types.LOOKUP_REQUEST]: request,
    [Types.LOOKUP_RECEIVE]: receive,
    [Types.LOOKUP_FAILURE]: failure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)

import Types from './Types'

const attemptLogin = (username, password) =>
  ({ type: Types.LOGIN_ATTEMPT, username, password })

const loginSuccess = (username) =>
  ({ type: Types.LOGIN_SUCCESS, username })

const loginFailure = (errorCode) =>
  ({ type: Types.LOGIN_FAILURE, errorCode })

const logout = () => ({ type: Types.LOGOUT })

const startup = () => ({ type: Types.STARTUP })

const requestTemperature = (city) => ({ type: Types.TEMPERATURE_REQUEST, city })
const receiveTemperature = (temperature) => ({ type: Types.TEMPERATURE_RECEIVE, temperature })
const receiveTemperatureFailure = () => ({ type: Types.TEMPERATURE_FAILURE })

const lookupRequest = (input) => ({ type: Types.LOOKUP_REQUEST, input})
const lookupReceive = (results) => ({ type: Types.LOOKUP_RECEIVE, ...results})
const lookupReceiveFailure = (error) => ({ type: Types.LOOKUP_FAILURE, error})

const quoteRequest = (symbol) => ({ type: Types.QUOTE_REQUEST, symbol})
const quoteReceive = (results) => ({ type: Types.QUOTE_RECEIVE, ...results})
const quoteReceiveFailure = (error) => ({ type: Types.QUOTE_FAILURE, error})

/**
 Makes available all the action creators we've created.
 */
export default {
  attemptLogin,
  loginSuccess,
  loginFailure,
  logout,
  startup,
  requestTemperature,
  receiveTemperature,
  receiveTemperatureFailure,
  lookupRequest,
  lookupReceive,
  lookupReceiveFailure,
  quoteRequest,
  quoteReceive,
  quoteReceiveFailure,
}

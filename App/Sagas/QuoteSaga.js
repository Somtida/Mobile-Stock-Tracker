import {take, call, put} from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

export default (api) => {

  function * worker (symbol) {
    // make the call to the api
    console.log('symbol:',symbol);
    const response = yield call(api.quote, symbol)

    // success?
    console.log('response:',response);
    if (response.ok) {
      const results = response.data
      console.log('QuoteSaga results:',results);
      yield put(Actions.quoteReceive({ results }))
    } else {
      yield put(Actions.quoteReceiveFailure())
    }
  }


  function * watcher () {
    while (true) {
      const {symbol} = yield take(Types.QUOTE_REQUEST)
      console.log(symbol);
      yield call(worker, symbol)
    }
  }


  return {
    watcher,
    worker
  }
}

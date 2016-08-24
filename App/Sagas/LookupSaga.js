import {take, call, put} from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'

export default (api) => {

  function * worker (input) {
    // make the call to the api
    console.log('input:',input);
    const response = yield call(api.lookup, input)

    // success?
    console.log('response:',response);
    if (response.ok) {
      const results = response.data
      console.log('LookupSaga results:',results);
      yield put(Actions.lookupReceive({ results }))
    } else {
      yield put(Actions.lookupReceiveFailure())
    }
  }


  function * watcher () {
    while (true) {
      const {input} = yield take(Types.LOOKUP_REQUEST)
      yield call(worker, input)
    }
  }


  return {
    watcher,
    worker
  }
}

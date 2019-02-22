import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootReducer from './reducer'
import rootEpic from './epic'

import { alertInfo, alertSuccess, alertError } from '../common/alert'

const handleAxiosError = error => {
  const { response } = error || {}
  const { data } = response || {}
  const {
    message,
    //status
  } = data

  // if (status === 401) {
  //   signOut()
  //   return false
  // }

  alertError(message)
  return false
}

const handleAjaxError = error => {
  const { response } = error || {}
  const {
    message,
    //status
  } = response || {}

  console.log('handleError', error, response)

  // if (status === 401) {
  //   signOut()
  //   return false
  // }

  alertError(message)
  return false
}

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {
    alertInfo,
    alertSuccess,
    alertError,
    handleAxiosError,
    handleAjaxError,
  },
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
)

export default store

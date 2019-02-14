import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootReducer from './reducer'
import rootEpic from './epic'

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {},
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
)

export default store

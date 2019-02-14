import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import layout from './layout/reducer'

export default combineReducers({
  layout,
  form: formReducer,
})

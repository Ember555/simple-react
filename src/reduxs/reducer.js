import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import layout from './layout/reducer'
import submenu1 from './submenu1/reducer'

export default combineReducers({
  layout,
  submenu1,
  form: formReducer,
})

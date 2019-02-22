import { combineEpics } from 'redux-observable'
import { searchEpic as submenu1SearchEpic } from './submenu1/search'

export default combineEpics(
    submenu1SearchEpic,
)

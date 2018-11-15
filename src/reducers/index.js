import { combineReducers } from 'redux'
import login from './login'
import cards from './cards'
import programs from './programs'

export default combineReducers({
  login,
  cards,
  programs,
})

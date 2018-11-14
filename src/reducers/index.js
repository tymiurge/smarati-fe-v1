import { combineReducers } from 'redux'
import login from './login'
import cards from './cards'
import programs from './programs'
import tags from './tags'

export default combineReducers({
  login,
  cards,
  programs,
  tags
})

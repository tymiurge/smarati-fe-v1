import { combineReducers } from 'redux'
import login from './login'
import cards from './cards'

export default combineReducers({
  login,
  cards
})

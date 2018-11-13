import {
  CARDS_FETCHED
} from './action-names'
import * as api from './../api'
import { combineReducers } from 'redux'

const list = (state = [], action) => {
  switch (action.type) {
    case CARDS_FETCHED: return action.list
    default: return state
  }
}

export default combineReducers({
  list
})

export const $fetchCards = () => dispatch => {
  api
    .fetchCards()
    .then(result => {
      dispatch({
        type: CARDS_FETCHED,
        list: result.data.list
      })
    })
}

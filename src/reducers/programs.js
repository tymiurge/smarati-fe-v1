import {
  PROGRAMS_FETCHED
} from './action-names'
import * as api from './../api'
import { combineReducers } from 'redux'

const list = (state = [], action) => {
  switch (action.type) {
    case PROGRAMS_FETCHED: return action.list
    default: return state
  }
}

export default combineReducers({
  list
})

export const $fetchPrograms = () => dispatch => {
  api
    .fetchPrograms()
    .then(result => {
      dispatch({
        type: PROGRAMS_FETCHED,
        list: result.data.list
      })
    }) 
}

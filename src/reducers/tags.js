import {
  TAGS_FETCHED
} from './action-names'
import * as api from './../api'
import { combineReducers } from 'redux'

const list = (state = [], action) => {
  switch (action.type) {
    case TAGS_FETCHED: return action.list
    default: return state
  }
}

export default combineReducers({
  list
})

export const $fetchTags = () => dispatch => {
  api
    .fetchTags()
    .then(result => {
      dispatch({
        type: TAGS_FETCHED,
        list: result.data.list
      })
    })
}

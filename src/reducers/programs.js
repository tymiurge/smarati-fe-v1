import {
  PROGRAMS_FETCHED,
  TAGS_FETCHED,
  BOXES_FETCHED
} from './action-names'
import * as api from './../api'
import { combineReducers } from 'redux'

const list = (state = [], action) => {
  switch (action.type) {
    case PROGRAMS_FETCHED: return action.list
    default: return state
  }
}

const tags = (state = [], action) => {
  switch (action.type) {
    case TAGS_FETCHED: return action.list
    default: return state
  }
}

const boxes = (state =[], action) => {
  switch (action.type) {
    case BOXES_FETCHED: return action.list
    default: return state
  }
}

export default combineReducers({
  list,
  tags,
  boxes
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

export const $fetchBoxes = () => dispatch => {
  api
    .fetchBoxes()
    .then(result => {
      dispatch({
        type: BOXES_FETCHED,
        list: result.data.list
      })
    })
}

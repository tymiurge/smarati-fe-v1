import {
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from './action-names'
import * as api from './../api'
import { combineReducers } from 'redux'

const confirmed = (state = false, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: return true
    default: return state
  }
}

const errors = (state = [], action) => {
  switch(action.type) {
    case LOGIN_FAIL: return action.errors
    default: return state
  }
}

const userId = (state = null, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS: return action.userId
    default: return state
  }
}

export default combineReducers({
  confirmed,
  errors,
  userId
})


export const $loginUser = data => dispatch => {
  api.loginUser(data).then(result => {
    if (result.code !== 200) {
      dispatch({
        type: LOGIN_FAIL,
        errors: result.messages
      })
    } else {
      dispatch({
        type: LOGIN_SUCCESS,
        userId: result.data.id
      })
    }
  })
}

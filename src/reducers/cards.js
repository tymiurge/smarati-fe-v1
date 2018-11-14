import {
  CARDS_FETCHED,
  CARD_FLIPPED,
  CARD_BOX_ENTRANCE,
  BOX_HISTORY_NAVIGATED
} from './action-names'
import * as api from './../api'
import { combineReducers } from 'redux'
import { arrays } from 'utils'

const list = (state = [], action) => {
  switch (action.type) {
    case CARDS_FETCHED: return action.list
    case CARD_FLIPPED:
      return state.map(item => item.id === action.id 
        ? {...item, data: {...item.data, flipped: action.toState}}
        : item    
      )
    default: return state
  }
}

const HISTORY_ENTRY = {id: null, title: 'All Cards'}

const boxHistory = (state = [HISTORY_ENTRY], action) => {
  switch (action.type) {
    case CARD_BOX_ENTRANCE: 
      return [...state, {id: action.id, title: action.boxName}]
    case BOX_HISTORY_NAVIGATED: 
      return state.slice(0, state.findIndex(item => item.id === action.id) - 1)
    default: return state
  }
}

export default combineReducers({
  list,
  boxHistory
})

export const $fetchCards = () => (dispatch, getState) => {
  api
    .fetchCards(arrays.last(getState().cards.boxHistory).id)
    .then(result => {
      dispatch({
        type: CARDS_FETCHED,
        list: result.data.list
      })
    })
}

export const $flipCard = card => dispatch => {
  const oldFlipState = card.data.flipped === undefined ? false : card.data.flipped
  dispatch({
    type: CARD_FLIPPED,
    id: card.id,
    toState: !oldFlipState
  })
}

export const $enterBox = box => dispatch => {
  dispatch({
    type: CARD_BOX_ENTRANCE,
    id: box.id,
    boxName: box.data.name
  })
} 

export const $navigateBoxHistory = historyItem => dispatch => {
  dispatch({
    type: BOX_HISTORY_NAVIGATED,
    id: historyItem.id
  })
}

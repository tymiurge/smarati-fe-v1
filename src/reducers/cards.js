import {
  CARDS_FETCHED,
  CARD_FLIPPED,
  CARD_BOX_ENTRANCE
} from './action-names'
import * as api from './../api'
import { combineReducers } from 'redux'

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

const currentBox = (state = null, action) => {
  switch(action.type) {
    case CARD_BOX_ENTRANCE: return action.id
    default: return state
  }
}

export default combineReducers({
  list,
  currentBox
})

export const $fetchCards = () => (dispatch, getState) => {
  api
    .fetchCards(getState().cards.currentBox)
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
    id: box.id
  })
} 

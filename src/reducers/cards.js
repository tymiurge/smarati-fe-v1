import {
  CARDS_FETCHED,
  CARD_FLIPPED,
  CARD_BOX_FLIPPED
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

const flipCard = (item, dispatch) => {
  const oldFlipState = item.data.flipped === undefined ? false : item.data.flipped
  dispatch({
    type: CARD_FLIPPED,
    id: item.id,
    toState: !oldFlipState
  })
}

const flipCardBox = item => {

}

export const $flipCard = card => dispatch => {
  switch (card.type) {
    case 'card': 
      flipCard(card, dispatch)
      break
    case 'box': 
      flipCardBox(card, dispatch)
      break
    default: throw new Error(`${card.type} is not supported`)
  }
}

import Cards from './Cards'
import { connect } from 'react-redux'
import { 
  $fetchCards, 
  $flipCard, 
  $enterBox, 
  $navigateBoxHistory,
  $triggerCardsScreenLoading
} from 'reducers/cards'

const stateToProps = state => ({
  list: state.cards.list,
  boxHistory: state.cards.boxHistory
})

const dispatchToProps = dispatch => ({
  onLoad: () => {
    dispatch($fetchCards())
    dispatch($triggerCardsScreenLoading())
  },
  onCardFlip: item => dispatch($flipCard(item)),
  onBoxEnter: box => {
    dispatch($enterBox(box))
    dispatch($fetchCards())
  },
  onHistoryNav: item => {
    dispatch($navigateBoxHistory(item))
    dispatch($fetchCards())
  }
})

export default connect(stateToProps, dispatchToProps)(Cards)

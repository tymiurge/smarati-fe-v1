import Cards from './Cards'
import { connect } from 'react-redux'
import { $fetchCards, $flipCard, $enterBox } from 'reducers/cards'

const stateToProps = state => ({
  list: state.cards.list
})

const dispatchToProps = dispatch => ({
  onLoad: () => dispatch($fetchCards()),
  onCardFlip: item => dispatch($flipCard(item)),
  onBoxEnter: box => {
    dispatch($enterBox(box))
    dispatch($fetchCards())
  }
})

export default connect(stateToProps, dispatchToProps)(Cards)

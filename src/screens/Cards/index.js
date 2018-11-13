import Cards from './Cards'
import { connect } from 'react-redux'
import { $fetchCards, $flipCard } from 'reducers/cards'

const stateToProps = state => ({
  list: state.cards.list
})

const dispatchToProps = dispatch => ({
  onLoad: () => dispatch($fetchCards()),
  onCardFlip: item => dispatch($flipCard(item))
})

export default connect(stateToProps, dispatchToProps)(Cards)

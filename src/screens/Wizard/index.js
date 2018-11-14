import Wizard from './Wizard'
import { connect } from 'react-redux'
import { $addCard, $addCardBox, $addMultiCards } from 'reducers/cards'

const mapStateToProps = state => ({
  requestFullfilled: state.cards.addRequestFullfilled
})

const mapDispatchToProps = dispatch => ({
  onCardAdd: data => dispatch($addCard(data)),
  onCardBoxAdd: data => dispatch($addCardBox(data)),
  onMultiCardsAdd: data => dispatch($addMultiCards(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Wizard)

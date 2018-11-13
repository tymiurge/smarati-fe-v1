import Cards from './Cards'
import { connect } from 'react-redux'
import { $fetchCards } from 'reducers/cards'

const stateToProps = state => ({
  list: state.cards.list
})

const dispatchToProps = dispatch => ({
  onLoad: () =>dispatch($fetchCards())
})

export default connect(stateToProps, dispatchToProps)(Cards)

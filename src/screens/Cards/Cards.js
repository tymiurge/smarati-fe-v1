import React from 'react'
import { widjets } from 'components'
import { Container } from 'semantic-ui-react'
import Toolbar from './Toolbar'
import List from './List'
import { layouting } from 'components'
import PropTypes from 'prop-types'
import { intends } from 'styles'

const Main = props => (
  <layouting.HeightColumn
    height={props.height}
    header={(
      <Container style={{marginTop: 0, paddingTop: '5px'}}>
        <Toolbar {...props}/>
      </Container>
    )}
    main={(
      <Container style={intends.noMarginTop}>
        <List {...props} />
      </Container> 
    )}
  />
)

class Cards extends React.Component {

  static propTypes = {
    list: PropTypes.array.isRequired,
    onLoad: PropTypes.func.isRequired,
    onCardFlip: PropTypes.func.isRequired,
    onBoxEnter: PropTypes.func.isRequired,
    boxHistory: PropTypes.array.isRequired,
    onHistoryNav: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    if (!this.props.list) return (<div/>)
    return (
      <layouting.FullSizePage
        header={<widjets.Header selectedIdx={0} />}
        main={<Main {...this.props}/>}
        leftAsideWidth='0%'
        rightAsideWidth='0%'
        mainScrollable={false}
      />
    )
  }
}

export default Cards

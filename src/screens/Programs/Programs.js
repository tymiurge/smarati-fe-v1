import React from 'react'
import { layouting, widjets } from 'components'
import { Container } from 'semantic-ui-react'
import Toolbar from './Toolbar'
import List from './List'
import PropTypes from 'prop-types'

class Programs extends React.Component {

  static propTypes = {
    programs: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired,
    boxes: PropTypes.array.isRequired,
    onLoad: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    return (
      <layouting.FullSizePage
        header={<widjets.Header selectedIdx={1}/>}
        main={
          <Container style={{marginTop: 0, paddingTop: '5px'}}>
            <Toolbar {...this.props} />
            <List {...this.props} />
          </Container>
        }
        leftAsideWidth='0%'
        rightAsideWidth='0%'
      />
    )
  }
}

export default Programs

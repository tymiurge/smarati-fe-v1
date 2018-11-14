import React from 'react'
import { layouting, widjets } from 'components'
import { Container } from 'semantic-ui-react'
import Toolbar from './Toolbar'
import List from './List'
import PropTypes from 'prop-types'

const programs = [
  {
    id: 1,
    title: 'All',
    items: 23000,
    learnt: 2324,
    progress: 43,
    startedAt: 'jun 15, 15',
    activities: [1, 34, 73, 2, 45, 5, 34]
  }, 
  {
    id: 2,
    title: 'English',
    items: 4000,
    learnt: 23,
    progress: 43,
    startedAt: 'jun 15, 15',
    activities: [34, 2, 89, 30, 93, 19, 33]
  },
  {
    id: 3,
    title: 'Linux Commands',
    items: 345,
    learnt: 333,
    progress: 98,
    startedAt: 'jun 15, 15',
    activities: [34, 2, 89, 30, 93, 19, 33]
  },
  {
    id: 4,
    title: 'All',
    items: 23000,
    learnt: 2324,
    progress: 43,
    startedAt: 'jun 15, 15',
    activities: [34, 2, 89, 30, 93, 19, 33]
  }, 
  {
    id: 5,
    title: 'English',
    items: 4000,
    learnt: 23,
    progress: 43,
    startedAt: 'jun 15, 15',
    activities: [34, 2, 89, 30, 93, 19, 33]
  },
  {
    id: 6,
    title: 'Linux Commands',
    items: 345,
    learnt: 333,
    progress: 98,
    startedAt: 'jun 15, 15',
    activities: [34, 2, 89, 30, 93, 19, 33]
  }
]

class Programs extends React.Component {

  static propTypes = {
    programs: PropTypes.array.isRequired,
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
            <Toolbar />
            <List items={this.props.programs}/>
          </Container>
        }
        leftAsideWidth='0%'
        rightAsideWidth='0%'
      />
    )
  }
}

export default Programs

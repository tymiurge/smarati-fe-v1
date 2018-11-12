import React from 'react'
import { layouting, widjets } from 'components'
import { Container } from 'semantic-ui-react'
import Toolbar from './Toolbar'

const programs = [
  {
    id: 1,
    title: 'All',
    items: 23000,
    learnt: 2324,
    progress: 43
  }, 
  {
    id: 2,
    title: 'English',
    items: 4000,
    learnt: 23,
    progress: 43
  },
  {
    id: 3,
    title: 'Linux Commands',
    items: 345,
    learnt: 333,
    progress: 98
  },
  {
    id: 4,
    title: 'All',
    items: 23000,
    learnt: 2324,
    progress: 43
  }, 
  {
    id: 5,
    title: 'English',
    items: 4000,
    learnt: 23,
    progress: 43
  },
  {
    id: 6,
    title: 'Linux Commands',
    items: 345,
    learnt: 333,
    progress: 98
  }
]

class Programs extends React.Component {


  render() {
    return (
      <layouting.FullSizePage
        header={<widjets.Header selectedIdx={1}/>}
        main={
          <Container style={{marginTop: 0, paddingTop: '5px'}}>
            <Toolbar />
            
          </Container>
        }
        leftAsideWidth='0%'
        rightAsideWidth='0%'
      />
    )
  }
}

export default Programs

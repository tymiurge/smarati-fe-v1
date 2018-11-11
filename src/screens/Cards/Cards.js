import React from 'react'
import { widjets } from 'components'
import { Container } from 'semantic-ui-react'
import Toolbar from './Toolbar'
import { container, composeStyles } from 'styles'
import List from './_List'
import { layouting } from 'components'
import Wizard from './Wizard'

const localStyles = {
  cardsContainer: {paddingLeft: '10px', paddingRight: '10px'}
}

const Main = props => (
  <layouting.HeightColumn
    height={props.height}
    header={(
      <Container style={{marginTop: 0, backgroundColor: 'rgba(0,0,0,.05)'}}>
        <Toolbar />
      </Container>
    )}
    main={(
      <Container style={{marginTop: 0}}>
        <List />
      </Container> 
    )}
  />
)

const Main1 = props => (
  <Container>
    <Wizard />
  </Container>
)

export default () => (
  <layouting.FullSizePage
    header={<widjets.Header />}
    main={<Main1 />}
    leftAsideWidth='0%'
    rightAsideWidth='0%'
    mainScrollable={false}
  />
)

import React from 'react'
import { Menu, Icon, Container } from 'semantic-ui-react'


const TitledHeader = ({title, onBackNavigation}) => (
  <Menu inverted color='blue' borderless style={{marginBottom: 0, marginTop: 0, borderRadius: 0}}>
    <Container>
      <Menu.Item style={{marginRight: '0', padding: '0'}} onClick={ () => onBackNavigation() } >
        <Icon name='arrow alternate circle left outline' size='big' />
      </Menu.Item>

      <Menu.Item header style={{fontSize: '1.2rem'}}>
        { title }
      </Menu.Item>

      <Menu.Menu position='right' >
        <Menu.Item header>
          Total cards: 100
        </Menu.Item>
        <Menu.Item header>
          Learnt: 13
        </Menu.Item>
        <Menu.Item header>
          In Learning queue: 24
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default TitledHeader


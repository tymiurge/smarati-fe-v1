import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

const Header = ({selectedIdx}) => (
  <Menu borderless style={{marginBottom: 0, borderRadius: '0'}} inverted>
    <Container>
    {
      [
        {name: 'Cards Collection', icon: 'database', route: '/cards'},
        {name: 'Learning Programs', icon: 'tasks', route: '/learning'}
      ].map((item, idx) => (
        <Menu.Item
          key={item.name} {...item}
          active={idx === selectedIdx}
          header
        />
      ))
    }
    <Menu.Menu position='right'>
      <Menu.Item header>Welcome, Tymur Labas</Menu.Item>
      <Menu.Item icon='user' />
    </Menu.Menu>
    </Container>
  </Menu>      
)

export default Header

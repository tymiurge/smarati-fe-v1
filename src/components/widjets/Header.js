import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

const Header = ({selectedIdx}) => (
  <Menu borderless style={{marginBottom: 0}}>
    <Container>
    {
      [
        {name: 'Cards Collection', icon: 'database', route: '/cards'},
        {name: 'Learning Programs', icon: 'tasks', route: '/learning'}
      ].map((item, idx) => (
        <Menu.Item
          key={item.name} {...item}
          active={idx === selectedIdx}
        />
      ))
    }
    </Container>
  </Menu>      
)

export default Header

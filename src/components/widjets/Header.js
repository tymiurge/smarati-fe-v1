import React from 'react'
//import PropTypes from 'prop-types'
import { Menu, Container } from 'semantic-ui-react'

class Header extends React.Component {
/*
    static propTypes = {
        onSearchClick: PropTypes.func.isRequired,
        onAddClick: PropTypes.func.isRequired
        //title: PropTypes.array.isRequired
    }
*/
  render() {
    return (
      <Menu borderless style={{marginBottom: 0}}>
        <Container>
        {
          [
            {name: 'Cards Collection', icon: 'database', route: '/cards'},
            {name: 'Learning Programs', icon: 'tasks', route: '/learning'}
          ].map((item, idx) => (
            <Menu.Item
              key={item.name} {...item}
              active={idx === 0}
            />
          ))
        }
        </Container>
      </Menu>      
    )
  }
}

export default Header

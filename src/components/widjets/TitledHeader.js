import React from 'react'
import { Menu, Icon, Container } from 'semantic-ui-react'
//import { withRouter } from 'react-router-dom'

const TitledHeader = ({title, history}) => (
  <Menu inverted color='blue' borderless style={{marginBottom: 0, borderRadius: 0}}>
    <Container>
      <Menu.Item style={{marginRight: '0', padding: '0'}} /*onClick={ () => history.push('/challenges') }*/>
        <Icon name='arrow alternate circle left outline' size='big' />
      </Menu.Item>

      <Menu.Item header style={{fontSize: '1.2rem'}}>
        { title }
      </Menu.Item>
    </Container>
  </Menu>
)

export default TitledHeader
//export default withRouter(TitledHeader)

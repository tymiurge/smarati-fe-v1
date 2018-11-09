import React from 'react'
import { widjets } from 'components'
import { Menu, Icon, Breadcrumb, Button, Container, Segment, MenuHeader, MenuItem } from 'semantic-ui-react'
import CardBox from './CardBox'

export default () => (
  <Container>
    <widjets.Header />
    <Segment style={{height: '64em', marginTop: '2px', padding: 0}}>
      <Menu secondary>
        <Menu.Item>
          <Icon circular name='plus' />
          <Icon circular name='search' />
        </Menu.Item>
        <MenuItem>
        <Breadcrumb>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section link>Store</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
  </Breadcrumb>
        </MenuItem>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Icon circular name='pencil' color='pencil'/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <CardBox
        name='Waiting for Godot'
        progress={4}
        tags={['fr', 'book']}
      />

    </Segment>
  </Container>
)

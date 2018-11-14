import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { controls } from 'components'
import { intends, container, composeStyles } from 'styles'

const StaticMode = () => (
  <Menu secondary style={composeStyles(intends.noMarginBottom, container.bordered)} size='tiny'>
    <Menu.Item style={intends.noRightPadding}>
      <Icon circular name='plus' />
      <Icon circular name='search' />
    </Menu.Item>
    <Menu.Item style={intends.noLeft}>
      <controls.ViewsPath 
        views={
          [{title: 'All Cards'}, {title: 'English'}, {title: 'Waiting for Godot'}]
        } 
        onItemClick={item => alert(item.title)}
      />
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <Icon circular name='pencil' color='red'/>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)

export default StaticMode
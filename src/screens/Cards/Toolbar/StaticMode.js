import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { controls } from 'components'
import { intends, container, composeStyles } from 'styles'

const StaticMode = props => (
  <Menu secondary style={composeStyles(intends.noMarginBottom, container.bordered)} size='tiny'>
    <Menu.Item style={intends.noRightPadding}>
      <Icon circular name='plus' className={'cursor-pointer'} onClick={() => props.onPlusClick()}/>
      <Icon circular name='search' />
    </Menu.Item>
    <Menu.Item style={intends.noLeft}>
      <controls.ViewsPath 
        views={
          props.boxHistory
        } 
        onItemClick={item => props.onHistoryNav(item)}
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
import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { intends, container, composeStyles } from 'styles'

const StaticMode = props => (
  <Menu secondary style={ composeStyles(intends.noMarginBottom, container.bordered)} size='tiny'>
    <Menu.Item style={intends.noRightPadding}>
      <Icon circular name='plus' className={'cursor-pointer'} onClick={() => props.onModeSwitch('wizard')}/>
      <Icon circular name='search' onClick={() => props.onModeSwitch('search')} />
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <Icon name='pencil' circular />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)

export default StaticMode

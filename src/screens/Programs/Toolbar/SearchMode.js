import React from 'react'
import { layouting, controls } from 'components'
import { Input } from 'semantic-ui-react'
import { container, composeStyles } from 'styles'

const SearchMode = props => (
  <div style={composeStyles(container.bordered, {paddingLeft: '5px', paddingRight: '5px'})}>
    <layouting.FullNFillInRow>
      <Input placeholder='Search...' icon='search' fluid iconPosition='left'/>
      <controls.YesNoButtons
        onNoClick={() => props.onModeSwitch('static')}
      />
    </layouting.FullNFillInRow>
  </div>
)

export default SearchMode

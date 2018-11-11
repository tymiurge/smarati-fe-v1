import React from 'react'
import { Message, Segment } from 'semantic-ui-react'
import BoxWizard from './BoxWizard'
import CardWizard from './CardWizard'
import { controls } from 'components'


export default () => (
  <div>
    <Message
      attached
      content={(
        <controls.ChoiseSwitch 
          title='Select Wizard Type:' onSwitch={item => alert(item.title)}
          options={[
            {title: 'Box'},
            {title: 'Card'}
          ]}
        />
      )}
    />
    <Segment attached='bottom'>
      { false && <BoxWizard /> }
      <CardWizard />
    </Segment>
  </div>
)

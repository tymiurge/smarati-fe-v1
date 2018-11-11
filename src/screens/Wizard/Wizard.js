import React from 'react'
import { Message, Segment, Container } from 'semantic-ui-react'
//import BoxWizard from './BoxWizard'
import CardWizard from './CardWizard'
import { controls, layouting, widjets } from 'components'

export default () => (
  <layouting.FullSizePage
    header={<widjets.TitledHeader title='Cards Creation Wizard' />}
    main={(
      
      <Container style={{marginTop: '10px'}}>
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
  
          <CardWizard />
        </Segment>
      </Container>
      
    )}
    leftAsideWidth='0%'
    rightAsideWidth='0%'
  />  
)

import React from 'react'
import { Form, Message, Segment } from 'semantic-ui-react'
import { intends } from 'styles'
import BoxWizard from './BoxWizard'
import CardWizard from './CardWizard'

export default () => (
  <div>
    <Message
      attached
      content={(
        <Form >
          <Form.Group inline style={intends.noMarginBottom}>
          <label>Select Wizard Type: </label>
          <Form.Radio
            label='Box'
            value='sm'
            checked={true}
            //onChange={this.handleChange}
          />
          <Form.Radio
            label='Card'
            value='md'
            checked={false}
            //onChange={this.handleChange}
          />
          </Form.Group>

        </Form>
      )}
    />
    <Segment attached='bottom'>
      { false && <BoxWizard /> }
      <CardWizard />
    </Segment>
  </div>
)

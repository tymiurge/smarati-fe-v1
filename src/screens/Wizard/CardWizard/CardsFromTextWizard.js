import React from 'react'
import { Form } from 'semantic-ui-react'
import { controls } from 'components'

class CardsFromTextWizard extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Form.TextArea label='Text delimited with semicolon' placeholder='paste text here...' />
        </Form>
        <controls.TagsInput asSegment={true} placeholder='type tag and press Enter'/>
        <controls.YesNoButtons
        />
      </div>
    )
  }
}

export default CardsFromTextWizard

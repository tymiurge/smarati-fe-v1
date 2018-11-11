import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { controls } from 'components'

class CardsFromTextWizard extends React.Component {
  render() {
    return (
      <div>
  <Form>
  
  <Form.TextArea label='Text delimited with semicolon' placeholder='paste text here...' />
  
  </Form>
  <controls.TagsInput asSegment={true} placeholder='type tag and press Enter'/>

   <div>
      <Button 
        circular icon='check' color='blue' 
        size='mini'
      />
      <Button size='mini' circular icon='cancel' color='red'  />
    </div>
  </div>
    )
  }
}

export default CardsFromTextWizard

import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { controls } from 'components'

class SingleCardWizard extends React.Component {
  render() {
    return (
      <div>
  <Form>
  <Form.Field>
    <label>Front Value </label>
    <input placeholder='write here what to rember ... ' />
  </Form.Field>
  <Form.TextArea label='Back Value' placeholder='write here how to remember... ' />
  
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

export default SingleCardWizard

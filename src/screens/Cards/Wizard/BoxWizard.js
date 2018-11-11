import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { controls } from 'components'

export default props => (
  <div>
  <Form>
  <Form.Field>
    <label>First Name</label>
    <input placeholder='First Name' />
  </Form.Field>
  
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

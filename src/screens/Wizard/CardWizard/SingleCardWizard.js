import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { controls } from 'components'

class SingleCardWizard extends React.Component {

  state = {
    front: '',
    back: '',
    tags: [],
    valid: true
  }

  onFieldChange = (field, value, valid=true) => this.setState(
    {...this.state, [field]: value, valid: this.state.valid && valid}
  )

  onConfirm = () => {
    if (this.state.valid) {
      this.props.onConfirm({
        type: 'singleCard',
        data: this.state
      })
    }
  }

  render() {
    return (
      <div>
        <Form>
          <controls.ValidatedInput
            formField={true}
            validators={[value => value !== '']}
            value={this.state.front}
            fieldBinding={'front'}
            onChange={this.onFieldChange}
            placeholder='Front Value'
            label='Front Value'
          />
          <Form.TextArea 
            label='Back Value' placeholder='write here how to remember... '
            value={this.state.back}
            onChange={e => this.onFieldChange('back', e.target.value)}
          />
        </Form>
        <controls.TagsInput 
          asSegment={true} placeholder='type tag and press Enter'
          onChange={tags => this.onFieldChange('tags', tags)}
        />

        <div>
          <Button 
            circular icon='check' color='blue' size='mini'
            onClick={this.onConfirm}
          />
          <Button 
            size='mini' circular icon='cancel' color='red'
          />
        </div>
      </div>
    )
  }
}

export default SingleCardWizard

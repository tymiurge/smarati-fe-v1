import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { controls } from 'components'
import PropTypes from 'prop-types'

class BoxWizard extends React.Component {

  static propTypes = {
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func
  }

  static defaultProps = {
    onConfirm: () => {},
    onCancel: () => {}
  }

  state = {
    name: '',
    tags: [],
    valid: true
  }

  onFieldChange = (field, value, valid=true) => this.setState(
    {...this.state, [field]: value, valid: this.state.valid && valid}
  )

  onConfirm = () => {
    if (this.state.valid) {
      this.props.onConfirm(
        {
          type: 'box',
          data: this.state
        }
      )
    }
  }

  render() {
    return (
      <div>
        <Form>
          <controls.ValidatedInput
            formField={true}
            validators={[value => value !== '']}
            value={this.state.name}
            fieldBinding={'name'}
            onChange={this.onFieldChange}
            placeholder='Cards Box Name'
            label='Cards Box Name'
          />
        </Form>
        <controls.TagsInput 
          asSegment={true}
          placeholder='type tag and press Enter'
          onChange={tags => this.onFieldChange('tags', tags)}
        />
        <div>
          <Button 
            circular icon='check' color='blue' size='mini'
            onClick={this.onConfirm}
          />
          <Button size='mini' circular icon='cancel' color='red'  />
        </div>
      </div>
    )
  }
}

export default BoxWizard

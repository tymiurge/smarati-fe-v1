import React from 'react'
import { Form } from 'semantic-ui-react'
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
      this.props.onConfirm(this.state)
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
        <controls.YesNoButtons
          onYesClick={this.onConfirm}
        />
      </div>
    )
  }
}

export default BoxWizard

import React from 'react'
import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { intends } from 'styles'
import { arrays } from 'utils'

class ChoiseSwitch extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    options: PropTypes.array.isRequired,
    onSwitch: PropTypes.func.isRequired
  }

  state = {
    selected: arrays.last(this.props.options).title
  }

  handleChange = (e, { value }) => {
    const selectedChoise = this.props.options[value]
    this.setState(
      {...this.state, selected: selectedChoise.title},
      () => this.props.onSwitch(selectedChoise)
    )
  }

  render() {
    return (
      <Form >
          <Form.Group inline style={intends.noMarginBottom}>
          {
            this.props.title &&
            <label>{ this.props.title }</label>
          }
          {
            this.props.options.map((choise, idx) => (
              <Form.Radio
                key={`choise+${idx}`}
                label={choise.title}
                value={idx}
                checked={this.state.selected === choise.idx}
                onChange={this.handleChange}
              />    
            ))
          }
          </Form.Group>
        </Form>
    )
  }
}

export default ChoiseSwitch

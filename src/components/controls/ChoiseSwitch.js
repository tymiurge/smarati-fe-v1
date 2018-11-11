import React from 'react'
import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { intends } from 'styles'

class ChoiseSwitch extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    options: PropTypes.array.isRequired,
    onSwitch: PropTypes.func.isRequired
  }

  state = {
    selected: this.props.options[0].title
  }

  handleChange = (e, { value }) => {
    const selectedChoise = this.props.options[value]
    this.setState(
      {...this.state, selected: selectedChoise.title},
      () => this.props.onSwitch(selectedChoise)
    )
  }

  componentDidMount() {
    this.props.onSwitch(this.props.options[0])
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
                checked={this.state.selected === choise.title}
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

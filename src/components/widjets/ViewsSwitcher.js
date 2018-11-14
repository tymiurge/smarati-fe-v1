import React from 'react'
import PropTypes from 'prop-types'

/**
 * May be used in case if a component should display a certain view under a certain 
 * condition.
 * There is only one requirement to the views - each of them should call onModeSwitch(key)
 * to amke ViewsSwitcher switch to view with the passed 'key'
 */
class ViewsSwitcher extends React.Component {

  static propTypes = {
    views: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      content: PropTypes.object.isRequired
    }))
  }

  state = {
    mode: undefined
  }

  setMode = mode => this.setState({...this.state, mode})

  componentDidMount() {
    this.setMode(this.props.views[0].key)
  }

  render() {
    if (this.state.mode !== undefined) {
      return React.cloneElement(
        this.props.views.find(view => view.key === this.state.mode).content,
        { onModeSwitch: this.setMode }
      )
    }
    return (<div/>)
  }
}

export default ViewsSwitcher

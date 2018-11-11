import React from 'react'
import PropTypes from 'prop-types'
import { Label, Icon } from 'semantic-ui-react'

const Container = props => {
  if (props.color === '') {
    const {color, ...others} = props
    return (
      <Label {...others}>
        {props.children}
      </Label>
    )
  }
  return (
    <Label {...props} >
      {props.children}
    </Label>
  )
}

class Tag extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    removable: PropTypes.bool,
    onRemoveClick: PropTypes.func
  }

  static defaultProps = {
    color: '',
    removable: false,
    onRemoveClick: () => {}
  }

  render () {
    const {removable, onRemoveClick, ...others} = this.props
    return (
      <Container size="small" {...others} style={{marginBottom: '1px'}}>
        {this.props.text}
        {
          removable &&
          <Icon 
            name="delete" 
            link 
            onClick={() => onRemoveClick(this.props.text)}
          />
        }
      </Container>    
    )
  }
}

export default Tag

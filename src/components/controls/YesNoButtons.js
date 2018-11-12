import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

const propTypes = {
  onYesClick: PropTypes.func,
  onNoClick: PropTypes.func
}

const defaultProps = {
  onYesClick: () => {},
  onNoClick: () => {},
  size: 'mini'
}

const YesNoButtons = props => {
  return (
    <div>
      <Button 
        circular size={props.size} icon='check' color='blue' onClick={props.onYesClick}
        style={{marginLeft: '.5em'}}
      />
      <Button circular size={props.size} icon='cancel' color='red' onClick={props.onNoClick} />
    </div>
  )
}

YesNoButtons.propTypes = propTypes
YesNoButtons.defaultProps = defaultProps

export default YesNoButtons

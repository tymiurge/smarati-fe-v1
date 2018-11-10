import React from 'react'
import { Icon } from 'semantic-ui-react'
import Skin from './_Skin'
import PropTypes from 'prop-types'
import { composeStyles } from 'styles'

const localStyles = {
  iconBox: {width: '35px', height: '35px'},
  icon: {marginTop: '3px'},
  skinStyle: {
    backgroundColor: '#fffdd0'
  }
}

const propTypes = {
  value: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  skinStyle: PropTypes.object
}

const defaultProps = {
  skinStyle: {}
}

const CardBox = props => (
  <Skin 
    {...props} 
    skinStyle={composeStyles(localStyles.skinStyle, props.skinStyle)}
    visualization={(
      <div style={localStyles.iconBox}>
        <Icon name='folder' style={localStyles.icon} size='big' color='blue'/>
      </div>
    )}
    tagColor='blue'
  />
)

CardBox.propTypes = propTypes
CardBox.defaultProps = defaultProps

export default CardBox

import React from 'react'
import { Icon } from 'semantic-ui-react'
import _Skin from './_Skin'
import PropTypes from 'prop-types'

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
  onClick: PropTypes.func.isRequired
}

const CardBox = props => (
  <_Skin 
    {...props} 
    skinStyle={localStyles.skinStyle}
    visualization={(
      <div style={localStyles.iconBox}>
        <Icon name='folder' style={localStyles.icon} size='big' color='blue'/>
      </div>
    )}
    tagColor='blue'
  />
)

CardBox.propTypes = propTypes

export default CardBox

import React from 'react'
import { controls } from 'components'
import Skin from './_Skin.js'
import PropTypes from 'prop-types'

const propTypes = {
  value: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  progress: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  skinStyle: PropTypes.object
}

const defaultProps = {
  skinStyle: {}
}

const CardFace = props => (
  <Skin 
    {...props} 
    visualization={<controls.PieProgress progress={props.progress} width={35}/>} 
    tagColor='green' 
  />
)

CardFace.propTypes = propTypes
CardFace.defaultProps = defaultProps

export default CardFace

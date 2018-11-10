import React from 'react'
import { controls } from 'components'
import _Skin from './_Skin.js'
import PropTypes from 'prop-types'

const propTypes = {
  value: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  progress: PropTypes.number.isRequired
}

const CardFace = props => (
  <_Skin 
    {...props} 
    visualization={<controls.PieProgress progress={props.progress} width={35}/>} 
    tagColor='green' 
  />
)

CardFace.propTypes = propTypes

export default CardFace

import React from 'react'
import { controls } from 'components'
import Skin from './_Skin.js'
import PropTypes from 'prop-types'
import { container, composeStyles } from 'styles'
import { Header, Label } from 'semantic-ui-react'

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

const localStyles = {
  cardDetails: {
    marginLeft: '8px'
  },
  tagsContr: {
    width: '157px'
  },
}

const FrontDetails = props => (
  <div style={composeStyles(container.flexColumn, localStyles.cardDetails)}>
    <div><Header as='h5'>{props.front}</Header></div>
    <div 
      style={composeStyles(container.cutText, localStyles.tagsContr)}
    >
      {
        props.tags.map(tag => (<Label color='blue' key={tag} size='mini'>{tag}</Label>))
      }
    </div>
  </div>
)

const CardFace = props => (
  <Skin 
    {...props} 
    visualization={<controls.PieProgress progress={props.progress} width={35}/>} 
    details={<FrontDetails {...props} />}
    tagColor='green' 
  />
)

CardFace.propTypes = propTypes
CardFace.defaultProps = defaultProps

export default CardFace

import React from 'react'
import { Icon } from 'semantic-ui-react'
import Skin from './_Skin'
import PropTypes from 'prop-types'
import { container, composeStyles } from 'styles'
import { Header, Label } from 'semantic-ui-react'
import localStyles from './_styles'

const Details = props => (
  <div style={composeStyles(container.flexColumn, localStyles.cardDetails)}>
    <div><Header as='h5'>{props.name}</Header></div>
    <div 
      style={composeStyles(container.cutText, localStyles.tagsContr)}
    >
      {
        props.tags.map(tag => (<Label color='blue' key={tag} size='mini'>{tag}</Label>))
      }
    </div>
  </div>
)

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
    details={<Details {...props} />}
    tagColor='blue'
  />
)

CardBox.propTypes = propTypes
CardBox.defaultProps = defaultProps

export default CardBox

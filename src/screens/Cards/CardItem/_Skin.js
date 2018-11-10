import React from 'react'
import { Segment, Header, Label } from 'semantic-ui-react'
import { controls } from 'components'
import { container, composeStyles } from 'styles'

const localStyles = {
  tagsContr: {
    width: '157px'
  },
  cardContr: {
    padding: '4px 8px', width: '200px', marginTop: '0'
  },
  cardFlexContr: {
    height: '55px'  
  },
  cardDetails: {
    marginLeft: '8px'
  }
}

const _Skin = props => (
  <Segment compact style={localStyles.cardContr}>
    <div style={composeStyles(container.flexRow, localStyles.cardFlexContr)}>
      { props.visualization }
      <div style={composeStyles(container.flexColumn, localStyles.cardDetails)}>
        <div><Header as='h5'>{props.value}</Header></div>
        <div 
          style={composeStyles(container.cutText, localStyles.tagsContr)}
        >
          {
            props.tags.map(tag => (<Label color={props.tagColor} key={tag} size='mini'>{tag}</Label>))
          }
        </div>
      </div>
    </div>
  </Segment>
)

export default _Skin

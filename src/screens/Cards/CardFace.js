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

const CardFace = ({value, tags, progress}) => (
  <Segment compact style={localStyles.cardContr}>
    <div style={composeStyles(container.flexRow, localStyles.cardFlexContr)}>
      <controls.PieProgress progress={progress} width={35} />
      <div style={composeStyles(container.flexColumn, localStyles.cardDetails)}>
        <div><Header as='h5'>{value}</Header></div>
        <div 
          style={composeStyles(container.cutText, localStyles.tagsContr)}
        >
          {
            tags.map(tag => (<Label color='green' key={tag} size='mini'>{tag}</Label>))
          }
        </div>
      </div>
    </div>
  </Segment>
)

export default CardFace

import React from 'react'
import { Segment } from 'semantic-ui-react'
import { container, composeStyles } from 'styles'

const localStyles = {
  
  cardContr: {
    padding: '4px 8px', width: '200px', marginTop: '0', marginBottom: '0'
  },
  cardFlexContr: {
    height: '55px'  
  }
  
}

const _Skin = props => { 
  const _skinStyle = props.skinStyle || {}
  return (
    <Segment
      compact 
      style={composeStyles(localStyles.cardContr, _skinStyle)} 
      onClick={props.onClick}
      className={'cursor-pointer'}
    >
      <div style={composeStyles(container.flexRow, localStyles.cardFlexContr)}>
        { props.visualization }
        { props.details }
      </div>
    </Segment>
  )
}

export default _Skin

import React from 'react'
import { Segment } from 'semantic-ui-react'
import { container, composeStyles } from 'styles'
import localStyles from './_styles'

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

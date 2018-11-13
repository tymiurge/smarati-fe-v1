import React from 'react'

const DashedProgress = props => (
  <div style={{height: '5px', display: 'flex', justifyContent: 'center'}}>
    {
      (new Array(7)).fill(0).map((_, key) => (
        <div style={{height: '100%', flex: 1, paddingLeft: key !== 0 ? '4px' : '0px'}}>
          <div style={{height: '100%', width: '100%', backgroundColor: key < props.progress ? 'green' : 'gray'}}></div>
        </div>    
      ))
    }
    
  </div>
)

export default DashedProgress

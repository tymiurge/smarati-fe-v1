import React from 'react'
import PieChart from 'react-minimal-pie-chart'

export default ({progress, width}) => {
  const _width = width === undefined ? '35px' : `${width}px`
  return (
    <div style={{width: _width, height: _width}}>
      <PieChart
        data={
          [...new Array(14)].map((_, key) => {
            if (key % 2 === 0) {
              return { title: key, value: 20, color: key / 2 < progress ? '#20bf6b' : '#d1d8e0'}
            }
            return { title: key, value: 2, color: '#fff' }
          }
        )}
      />
    </div>
  )
}

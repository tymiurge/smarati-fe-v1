import React from 'react'
import PieChart from 'react-minimal-pie-chart'

export default ({progress, width}) => {
  const _width = width === undefined ? '35px' : `${width}px`
  return (
    <div style={{width: _width, height: _width}}>
      <PieChart
        data={[
          { title: 'One', value: 13.4, color: progress <= 0 ? '#20bf6b' : '#d1d8e0'},
          { title: 'd1', value: 2.2, color: '#fff' },
          { title: 'Two', value: 13.4, color: progress <= 1 ? '#20bf6b' : '#d1d8e0' },
          { title: 'd2', value: 2.2, color: '#fff' },
          { title: 'Three', value: 13.4, color: progress <= 2 ? '#20bf6b' : '#d1d8e0' },
          { title: 'd3', value: 2.2, color: '#fff' },
          { title: 'One1', value: 13.4, color: progress <= 3 ? '#20bf6b' : '#d1d8e0' },
          { title: 'd4', value: 2.2, color: '#fff' },
          { title: 'Two1', value: 13.4, color: progress <= 4 ? '#20bf6b' : '#d1d8e0' },
          { title: 'd5', value: 2.2, color: '#fff' },
          { title: 'Three1', value: 13.4, color: progress <= 5 ? '#20bf6b' : '#d1d8e0' },
          { title: 'd5', value: 2.2, color: '#fff' },
          { title: 'Three123', value: 13.4, color: progress <= 6 ? '#20bf6b' : '#d1d8e0' },
          { title: 'd235', value: 2.2, color: '#fff' },
        ]}
      />
    </div>
  )
}
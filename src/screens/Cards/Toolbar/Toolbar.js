import React from 'react'
import StaticMode from './StaticMode'

class Toolbar extends React.Component {

  state = {
    mode: 'static'
  }

  render() {
    return (
      <div>
        { this.state.mode === 'static' && <StaticMode {...this.props} />}
      </div>
    )
  }
}

export default Toolbar

import React, { Component } from 'react'
import { Cards, Wizard } from './screens'

class App extends Component {
  render() {
    return (
      <div>
        { false && <Cards /> }
        <Wizard />
      </div>
    );
  }
}

export default App;

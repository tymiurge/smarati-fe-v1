import React, { Component } from 'react'
import { Cards, Wizard, Programs, ProgramRun, Login } from './screens'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/wizard" component={Wizard} />
          <Route path="/cards" component={Cards} />
          <Route path="/programs" component={Programs} />
          <Route path="/programRun" component={ProgramRun} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

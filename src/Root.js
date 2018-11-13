import React, { Component } from 'react'
import { Cards, Wizard, Programs, ProgramRun, Login } from './screens'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

const Root = ({store}) => (
  <Provider store={store}>
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
  </Provider>  
)

export default Root

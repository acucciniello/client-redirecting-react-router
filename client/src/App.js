import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import './App.css'
import Result from './modules/result'
import Calculate from './modules/calculate'

class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Calculate} />
        <Route path='/result' component={Result} />
      </Router>
    )
  }
}

export default App

import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Main from 'components/Main'

class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path='/:subRoute?'
            exact
            component={ Main }
          />
        </Switch>
      </Router>
    )
  }
}

export default AppRoutes

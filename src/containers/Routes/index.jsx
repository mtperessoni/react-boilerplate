import React, { Component } from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import Route from 'components/Routes'
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

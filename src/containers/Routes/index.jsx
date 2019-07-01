import React, { Component } from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import CustomRoute from 'components/Routes'
import Main from 'containers/Main'

class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <CustomRoute
            path='/:subRoute?'
            exact
            component={ Main }
            metaTitle='Route'
            metaDescription='Main route'
            metaKeywords='boilerplate, rotas, react'
          />
        </Switch>
      </Router>
    )
  }
}

export default AppRoutes

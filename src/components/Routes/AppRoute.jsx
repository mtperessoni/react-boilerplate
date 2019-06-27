import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import AppLayout from 'components/Layout'

class AppRoute extends Component {
  static propTypes = {
    component: PropTypes.object.isRequired,
    cProps: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
  }

  renderLayout = (props) => {
    const { component: C, cProps } = this.props

    return (
      <AppLayout>
        <C { ...props } { ...cProps } />
      </AppLayout>
    )
  }

  render() {
    const { path } = this.props

    return (
      <Route
        path={ path }
        exact
        component={ props => this.renderLayout(props) }
      />
    )
  }
}

export default AppRoute

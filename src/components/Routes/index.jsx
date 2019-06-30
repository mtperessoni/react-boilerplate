import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import AppLayout from 'components/Layout'

class AppRoute extends Component {
  static propTypes = {
    component: PropTypes.object.isRequired,
    cProps: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool.isRequired,
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
    const { path, exact } = this.props

    return (
      <Fragment>
        <Route
          path={ path }
          exact={ exact }
          component={ props => this.renderLayout(props) }
        />
      </Fragment>
    )
  }
}

export default AppRoute
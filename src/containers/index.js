import { hot } from 'react-hot-loader/root'
import React, { Component, Fragment } from 'react'
import AppRoutes from './Routes'

class Container extends Component {
  render() {
    return (
      <Fragment>
        <AppRoutes />
      </Fragment>
    )
  }
}

export default hot(Container)

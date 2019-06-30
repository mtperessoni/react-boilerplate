import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react'
import AppRoutes from './Routes'

class Container extends Component {
  render() {
    return (
      <div className='app'>
        <AppRoutes />
      </div>
    )
  }
}

export default hot(Container)

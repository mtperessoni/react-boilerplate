import React, { Component } from 'react'
import AppRoutes from './Routes'

// Layout
class Container extends Component {
  render() {
    return (
      <div className='app'>
        <AppRoutes />
      </div>
    )
  }
}

export default Container

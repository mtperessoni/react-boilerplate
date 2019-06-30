import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import classNames from 'class-names'
import Navbar from './Navbar'
import SidePanel from './SidePanel'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  render() {
    const { children, className } = this.props

    return (
      <div className={ classNames('app', className) }>
        <Navbar />
        <SidePanel />
        <main className='content'>
          <div className='container-fluid'>
            { children }
          </div>
        </main>
      </div>
    )
  }
}

export default withRouter(Layout)

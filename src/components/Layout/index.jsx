import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'class-names'

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
      <div className={ classNames('main-class', className) }>
        { children }
      </div>
    )
  }
}

export default Layout

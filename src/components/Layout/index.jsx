import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import classNames from 'class-names'
import Navbar from './Navbar'
import SideBar, { SidebarContext } from './SideBar'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  constructor(props) {
    super(props)
    this.state = {
      showSideBar: false,
    }
  }

  setSideBarVisible = (showSideBar) => this.setState({ showSideBar })

  render() {
    const { children, className } = this.props
    const { showSideBar } = this.state

    return (
      <div className={ classNames('app', className) }>
        <SidebarContext.Provider value={ {
          showSideBar,
          setSideBarVisible: this.setSideBarVisible,
        } }
        >
          <header role='banner'>
            <Navbar />
          </header>
          <main className='content container-fluid' role='main'>
            <SideBar />
            <div
              role='presentation'
              onClick={(e) => {
                e.preventDefault()
                this.setSideBarVisible(false)
              } }
              className='main-div'
            >
              { children }
            </div>
          </main>
        </SidebarContext.Provider>
      </div>
    )
  }
}

export default withRouter(Layout)

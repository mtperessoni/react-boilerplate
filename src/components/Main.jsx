import React, { Component } from 'react'

class Main extends Component {
  render() {
    return (
      <div className='App'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='#'>Navbar</a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#conteudoNavbarSuportado' aria-controls='conteudoNavbarSuportado' aria-expanded='false' aria-label='Alterna navegação'>
            <span className='navbar-toggler-icon'></span>
          </button>
        </nav>
      </div>
    )
  }
}

export default Main

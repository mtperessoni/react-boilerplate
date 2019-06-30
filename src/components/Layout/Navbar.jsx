import React, { memo } from 'react'
// import PropTypes from 'prop-types'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <span className='navbar-brand ml-auto'>Empresa</span>
    </nav>
  )
}

export default memo(Navbar)

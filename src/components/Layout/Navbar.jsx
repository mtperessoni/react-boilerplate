import React, { memo } from 'react'
// import PropTypes from 'prop-types'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white'>
      <span className='navbar-brand ml-auto border-left border-light pl-4'>Boilerplate</span>
    </nav>
  )
}

export default memo(Navbar)

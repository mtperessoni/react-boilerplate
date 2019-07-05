import React, { memo, useContext } from 'react'
import { Reorder } from '@material-ui/icons'
import { SidebarContext } from 'components/Layout/SideBar'


const Navbar = () => {
  const { showSideBar, setSideBarVisible } = useContext(SidebarContext)

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white' role='banner'>
      <div className='d-none d-md-flex w-100'>
        <span className='ml-auto border-left border-light pl-4'>Boilerplate</span>
      </div>
      <div className='d-flex d-md-none w-100'>
        <button
          type='button'
          className='btn'
          onClick={ () => setSideBarVisible(!showSideBar) }
        >
          <Reorder />
        </button>
      </div>
    </nav>
  )
}

export default memo(Navbar)

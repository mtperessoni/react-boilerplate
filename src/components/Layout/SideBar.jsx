import React, { useContext } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Language, Edit, PanTool } from '@material-ui/icons'

export const SidebarContext = React.createContext({
  showSideBar: false,
  setSideBarVisible: () => {},
})

const SideBar = (props) => {
  const { showSideBar } = useContext(SidebarContext)

  return (
    <div className={ classNames('sidebar', {
      'open': showSideBar,
    }) }
    >
      <ul className='list-unstyled'>
        <li className='border-bottom border-light'>
          <Language />
        </li>
        <Link
          to='/'
        >
          <li className='border-bottom border-dark'>
            <Edit />
          </li>
        </Link>
        <Link
          to='/'
        >
          <li className='border-bottom border-dark'>
            <PanTool />
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default SideBar

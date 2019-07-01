import React from 'react'
import { Link } from 'react-router-dom'
import { Language, Edit, PanTool } from '@material-ui/icons'

const SidePanel = (props) => {
  return (
    <div className='sidepanel'>
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

export default SidePanel

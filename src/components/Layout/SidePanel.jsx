import React from 'react'
import { Language, Edit, PanTool } from '@material-ui/icons'

const SidePanel = (props) => {
  return (
    <div className='sidepanel'>
      <ul className='list-unstyled'>
        <li className='border-bottom border-success text-success'><Language /></li>
        <li className='border-bottom border-dark'><Edit /></li>
        <li className='border-bottom border-dark'><PanTool /></li>
      </ul>
    </div>
  )
}

export default SidePanel

import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'
function Header() {
  return (
    <div className='header'>
      <Link to='/' className='title'>Quiz Hub</Link>
      <hr className='divider' />
    </div>
  )
}

export default Header
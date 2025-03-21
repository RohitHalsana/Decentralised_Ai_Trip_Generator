import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='p-4 shadow-md flex justify-between items-center '>
      <a href="/">
      <img src="/logo.svg " alt="" />
      </a>
      <button className='text-white'>Sign in</button>
    </div>
  )
}

export default Header

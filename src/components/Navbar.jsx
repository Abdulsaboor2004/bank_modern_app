import { useState } from 'react'

import { close, logo, menu } from '../assets'

import { Navlinks } from '../constants'


const Navbar = () => {
  return (
    <nav className='w-full py-6 flex justify-between items-center navbar'>
      <img src={logo} alt="Hoobank logo" />
    </nav>
  )
}

export default Navbar
import { useState } from 'react'

import { close, logo, menu } from '../assets'

import { navLinks } from '../constants'


const Navbar = () => {
  return (
    <nav className='w-full py-6 flex justify-between items-center navbar'>
      <img src={logo} alt="Hoobank logo" className="w-[124px] h-[32px]" />

      <ul className=' list-none hidden sm:flex '></ul>
    </nav>
  )
}

export default Navbar
import React from 'react'
import './nav.css'
import { GoHome } from 'react-icons/go'
import { HiOutlineUser } from 'react-icons/hi'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

import { useState } from 'react'

const Nav = () => {
  const [isActive, setIsActive] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setIsActive('#')} className={isActive === '#' ? 'active' : ''}><GoHome /></a>
      <a href="#about" onClick={() => setIsActive('#about')} className={isActive === '#about' ? 'active' : ''}><HiOutlineUser /></a>
      <a href="#experience" onClick={() => setIsActive('#experience')} className={isActive === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#service" onClick={() => setIsActive('#service')} className={isActive === '#service' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setIsActive('#contact')} className={isActive === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
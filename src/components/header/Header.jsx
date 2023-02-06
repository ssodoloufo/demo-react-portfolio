import React from 'react'
import './header.css'
import ProfilPicture from '../../assets/pp.png'
import HeaderAction from './HeaderAction'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bienvenu, ici</h5>
        <h1>Arius D. Sodoloufo</h1>
        <h5 className="text-light">Fullstack Web Developer</h5>
        
        <HeaderAction />
        <HeaderSocial />

        <div className="me">
          <img src={ProfilPicture} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
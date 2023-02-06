import React from 'react'
import CV from '../../assets/cv.pdf'

const HeaderAction = () => {
  return (
    <div className="header__action">
        <a className="btn" href={CV} download>Mon CV</a>
        <a className="btn btn-primary" href="#contact">Contact</a>
    </div>
  )
}

export default HeaderAction
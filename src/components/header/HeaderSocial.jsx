import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header__social">
        <a className="" href="https://fr.linkedin.com/"><BsLinkedin /></a>
        <a className="" href="https://github.com/"><BsGithub /></a>
        <a className="" href="https://twitter.com/"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocial
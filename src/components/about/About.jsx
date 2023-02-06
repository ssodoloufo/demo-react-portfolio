import React from 'react'
import './about.css'
import MeImg from '../../assets/me.jpg'
import { FaAward } from 'react-icons/fa'
import { HiOutlineUsers } from 'react-icons/hi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Bref résumé</h5>
      <h2>Présentation</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={MeImg} alt="about-me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Expériences</h5>
              <small>+2 années</small>
            </article>

            <article className="about__card">
              <HiOutlineUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>En Afrique</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Réalisations</h5>
              <small>+10 projets</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Ab dignissimos natus laboriosam harum quia minima laborum expedita in suscipit recusandae, 
            odio doloremque magni neque ipsam quo nesciunt voluptates quos excepturi.
          </p>

          <a href="#contact" className='btn btn-primary'>Prenons contact</a>
        </div>
      </div>
    </section>
  )
}

export default About
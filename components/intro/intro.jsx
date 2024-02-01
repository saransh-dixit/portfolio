import React from 'react';
import './intro.css';
import bg from '../../assets/image.png'
import { Link } from 'react-scroll';
import btnimg from '../../assets/hireme.png'


function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">I'm <span className="introname">Saransh Dixit</span> <br /> WebSite Designer</span>
          <p className="introPara">I am a skilled web designer with experience in creating <br /> visually appealing and user friendly websites</p>
          <Link><button className="btn"><img src={btnimg} className='btnImg' alt="Hire Me" />Hire Me</button></Link>
      </div>
      <img src={bg} alt="profile" className='bg' />
    </section>
  )
}

export default Intro
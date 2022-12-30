import Navbar from '../components/Navbar';
import Header from '../components/Header'
import Skills from '../components/Skills'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Home = () => {
  return (
    <div>
    <Navbar/>    
    <Header/>
    <section id='skills'>
        <Skills/>
    </section>
    </div>
  )
}

export default Home
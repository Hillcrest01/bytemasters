import React from 'react'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import About from '../components/About/About'
import Whyus from '../components/Whyus/Whyus'
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <div>
        <Hero />
      <Services />
      <About />
      <Whyus />
      <Contact />
    </div>
  )
}

export default Home
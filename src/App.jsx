import React from 'react'
import { Route, Routes } from "react-router-dom"
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import BytemasttersAbout  from './pages/BytemasttersAbout'
import BytemastersContact from './pages/BytemastersContact'
import BytemastersServices from './pages/BytemastersServices'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = { <Home /> }/>
        <Route path='/services' element = { <BytemastersServices /> }/>
        <Route path='/about' element = { <BytemasttersAbout /> }/>
        <Route path='/contact' element = { <BytemastersContact /> }/>
      </Routes>
    </div>
  )
}

export default App
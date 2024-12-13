import React from 'react'
import { Route, Routes } from "react-router-dom"
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = { <Home /> }/>
        <Route path='/services' element = { <Services /> }/>
        <Route path='/about' element = { <About /> }/>
        <Route path='/contact' element = { <Contact /> }/>
      </Routes>
    </div>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Joblist from './Pages/Joblist';
import React from 'react'
import Loginform from './Loginform/Loginform';

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/navbar' element={ <Navbar/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/joblist' element={<Joblist/>}/>
            <Route path='/login' element={<Loginform/>}/>
        </Routes>    
  </Router>
  )
}

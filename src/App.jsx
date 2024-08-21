import React from 'react'
import İletisim from "./Companents/İletisim/İletisim"
import Navigation from './Companents/Nav/Navigation'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Companents/Home/Home'
import Locations from './Companents/Location/Locations'
import Mumbai from './Companents/Location/Mumbai'
import AboutUs from './Companents/AboutUs/AboutUs'
import ContactUs from './Companents/ContactUs/ContactUs'
import Solutions from './Companents/Solutions/Solutions'
import Awards from './Companents/Awards/Awards'

function App() {
  return (
    <div>
      <BrowserRouter>
      <İletisim/>
      <Navigation/>
      <Routes>
        <Route index path='/home' element={<Home/>}/>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path="/locations" element={<Locations />} />
        <Route path="/location/Mumbai" element={<Mumbai />} />
        <Route path="/About-Us" element ={<AboutUs/>}/>
        <Route path="/Contact-Us" element ={<ContactUs/>}/>
        <Route path="/Solutions" element ={<Solutions/>}/>
        <Route path="/Awards" element ={<Awards/>}/>
        
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App

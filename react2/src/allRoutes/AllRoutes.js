import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import Help from '../components/pages/Help'
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'
import About2 from '../components/pages/About2'
import About3 from '../components/pages/About3'

const AllRoutes = () => {
  return (
    <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="help" element={<Help />} />
                    <Route path="about2" element={<About2 />} />
                    <Route path="about3" element={<About3 />} />
                </Routes>
  )
}

export default AllRoutes
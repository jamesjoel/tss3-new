import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import Help from '../components/pages/Help'
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'

const AllRoutes = () => {
  return (
    <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="help" element={<Help />} />
                </Routes>
  )
}

export default AllRoutes
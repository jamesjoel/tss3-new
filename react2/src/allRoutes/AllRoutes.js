import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import Help from '../components/pages/Help'
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'
import About2 from '../components/pages/About2'
import About3 from '../components/pages/About3'
import Event1 from '../components/pages/Event1'
import Event2 from '../components/pages/Event2'
import Event3 from '../components/pages/Event3'
import Event4 from '../components/pages/Event4'

const AllRoutes = () => {
  return (
    <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="help" element={<Help />} />
                    <Route path="about2" element={<About2 />} />
                    <Route path="about3" element={<About3 />} />
                    <Route path="event1" element={<Event1 />} />
                    <Route path="event2" element={<Event2 />} />
                    <Route path="event3" element={<Event3 />} />
                    <Route path="event4" element={<Event4 />} />

                </Routes>
  )
}

export default AllRoutes
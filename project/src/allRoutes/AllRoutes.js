import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/user/feature/Home'
import About from '../components/user/feature/About'
import Destination from '../components/user/feature/Destination'
import Login from '../components/user/feature/Login'
import Signup from '../components/user/feature/Signup'
import UserModule from '../modules/UserModule'
import AdminModule from '../modules/AdminModule'
import Dashboard from '../components/admin/feature/Dashboard'
import Users from '../components/admin/feature/Users'
import Booking from '../components/admin/feature/Booking'
import AdminDestination from '../components/admin/feature/Destination'
import MyBooking from '../components/user/feature/MyBooking'

const AllRoutes = () => {
  return (
        <>
            <Routes>
                <Route path='' element={<UserModule />}>
                  <Route path='' element={<Home />} />
                  <Route path='about' element={<About />} />
                  <Route path='destination' element={<Destination />} />
                  <Route path='login' element={<Login />} />
                  <Route path='signup' element={<Signup />} />
                  <Route path='my-booking' element={<MyBooking />} />

                </Route>

                <Route path='admin' element={<AdminModule />}>
                  <Route path='dashboard' element={<Dashboard />} />
                  <Route path='users' element={<Users />} />
                  <Route path='booking' element={<Booking />} />
                  <Route path='destination' element={<AdminDestination />} />
                </Route>
            </Routes>
        </>
  )
}

export default AllRoutes
import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom'
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
import Logout from '../components/user/feature/Logout'
import AdminLogin from '../components/admin/feature/Login'
import AdminLogout from '../components/admin/feature/Logout'
import MyProfile from '../components/user/feature/MyProfile'
import UserProtactedModule from '../modules/UserProtactedModule'
import DestinationList from '../components/admin/feature/DestinationList'
import UserList from '../components/admin/feature/UserList'
import Hotel from '../components/admin/feature/Hotel'
import HotelList from '../components/admin/feature/HotelList'
import UHotel from '../components/user/feature/Hotel'

const AllRoutes = () => {
  return (
        <>
            <Routes>
                <Route path='' element={<UserModule />}>
                  <Route path='' element={<Home />} />
                  <Route path='about' element={<About />} />
                  <Route path='destination/:x' element={<Destination />} />
                  <Route path='login' element={<Login />} />
                  <Route path='signup' element={<Signup />} />
                  <Route path='hotel' element={<UHotel />} />
                  
                  
                  <Route path='user' element={<UserProtactedModule />}>
                      <Route path='my-booking' element={<MyBooking />} />
                      <Route path='my-profile' element={<MyProfile />} />
                      <Route path='logout' element={<Logout />} />
                  </Route>

                </Route>

                <Route path='admin' element={<AdminModule />}>

                  <Route path='' element={<AdminLogin />} />
                  <Route path='dashboard' element={<Dashboard />} />
                  <Route path='users' element={<Users />} />
                  <Route path='booking' element={<Booking />} />
                  <Route path='destination' element={<AdminDestination />} />
                  <Route path='hotel' element={<Hotel />} />
                  <Route path='destination/list' element={<DestinationList />} />
                  <Route path='hotel/list' element={<HotelList />} />
                  <Route path='users/list' element={<UserList />} />
                  <Route path='logout' element={<AdminLogout />} />
                </Route>
            </Routes>
        </>
  )
}





export default AllRoutes
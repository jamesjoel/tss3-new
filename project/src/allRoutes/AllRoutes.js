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
import MyProfile from '../components/user/feature/MyProfile'

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
                  
                  
                  <Route path='user' element={<UserProtactedRoute />}>
                      <Route path='my-booking' element={<MyBooking />} />
                      <Route path='my-profile' element={<MyProfile />} />
                      <Route path='logout' element={<Logout />} />
                  </Route>

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


let UserProtactedRoute = ()=>{
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("access-token"))
    {
      navigate("/login");
    }
  },[])
  return(
    <Outlet />
  )
}


export default AllRoutes
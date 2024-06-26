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
import Hotels from '../components/admin/feature/Hotels'
import HotelsList from '../components/admin/feature/HotelsList'
import ForgotPassword from '../components/user/feature/ForgotPassword'
import ChangePass from '../components/user/feature/ChangePass'
import AdminSlider from '../components/admin/feature/Slider'
import UpdateProfile from '../components/user/feature/UpdateProfile'
import Product from '../components/admin/feature/Product'
import ProductList from '../components/admin/feature/ProductList'
import ProductDetail from '../components/user/feature/ProductDetail'
import MyCart from '../components/user/feature/MyCart'

const AllRoutes = () => {
  return (
        <>
            <Routes>
                <Route path='' element={<UserModule />}>
                  <Route path='' element={<Home />} />
                  <Route path='about' element={<About />} />
                  <Route path='detail/:id' element={<ProductDetail />} />
                  <Route path='forgot-password' element={<ForgotPassword />} />
                  <Route path='destination/:x' element={<Destination />} />
                  <Route path='login' element={<Login />} />
                  <Route path='signup' element={<Signup />} />
                  <Route path='mycart' element={<MyCart />} />
                  
                  
                  <Route path='user' element={<UserProtactedModule />}>
                      <Route path='my-booking' element={<MyBooking />} />
                      <Route path='my-profile' element={<MyProfile />} />
                      <Route path='change-password' element={<ChangePass />} />
                      <Route path='update-profile' element={<UpdateProfile />} />
                      <Route path='logout' element={<Logout />} />
                  </Route>

                </Route>

                <Route path='admin' element={<AdminModule />}>

                  <Route path='' element={<AdminLogin />} />
                  <Route path='dashboard' element={<Dashboard />} />
                  <Route path='users' element={<Users />} />
                  <Route path='booking' element={<Booking />} />

                  <Route path='destination' element={<AdminDestination />} />
                  <Route path='destination/edit/:id' element={<AdminDestination />} />
                  <Route path='destination/list' element={<DestinationList />} />
                  
                  <Route path='product' element={<Product />} />
                  <Route path='product/edit/:id' element={<Product />} />
                  <Route path='product/list' element={<ProductList />} />

                  <Route path='hotels' element={<Hotels />} />
                  <Route path='hotels/list' element={<HotelsList />} />
                  <Route path='slider' element={<AdminSlider />} />
                  <Route path='hotels/edit/:id' element={<Hotels />} />
                  
                  <Route path='logout' element={<AdminLogout />} />
                </Route>
            </Routes>
        </>
  )
}





export default AllRoutes
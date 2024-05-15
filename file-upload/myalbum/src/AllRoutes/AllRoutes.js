import React, {useEffect} from 'react'
import {Routes, Route, Navigate, Outlet, useNavigate} from 'react-router-dom'
import Login from '../components/featured/Login'
import Signup from '../components/featured/Signup'
import MyAlbum from '../components/featured/MyAlbum'
import Logout from '../components/featured/Logout'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='' element={<ProtactedRoute />}>
          <Route path='myalbum' element={<MyAlbum />} />
          <Route path='logout' element={<Logout />} />
        </Route>
    </Routes>
  )
}

let ProtactedRoute = ()=>{
  let navigate = useNavigate();
  useEffect(()=>{
    if(! localStorage.getItem("access-token"))
      {
        navigate("/")
        return;
      }
  },[])
  return(
    <Outlet />
  )
}

export default AllRoutes
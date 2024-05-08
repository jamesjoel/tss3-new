import React, {useEffect} from 'react'
import {Routes, Route, useNavigate, Outlet, Navigate} from 'react-router-dom'
import Home from '../components/feature/Home'
import Student from '../components/feature/Student'
import AddStudent from '../components/feature/AddStudent'
import Login from '../components/feature/Login'
import Logout from '../components/feature/Logout'
import Profile from '../components/feature/Profile'
const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='student' element={<Student />} />
            <Route path='student/add' element={<AddStudent />} />
            <Route path='student/edit/:id' element={<AddStudent />} />
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />
            
            <Route path='' element={<ProtactedRoute />}>
                  <Route path='profile' element={<Profile />} />
            </Route>

        </Routes>
    </>
  )
}


let ProtactedRoute = ()=>{
  let navigate = useNavigate();
  
    if(! localStorage.getItem("access-token"))
      {
        return <Navigate to="/login" />        
      }
  
  return(
    <Outlet />
  )
}

export default AllRoutes
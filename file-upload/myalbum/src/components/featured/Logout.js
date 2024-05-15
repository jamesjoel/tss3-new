import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {doLogout} from '../../redux/AuthSlice'
const Logout = () => {
  let dispatch = useDispatch();
    useEffect(()=>{

        localStorage.removeItem("access-token");
        dispatch(doLogout());
    },[])
    
  return (
    <Navigate to="/" />
  )
}

export default Logout
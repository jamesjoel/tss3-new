import React, {useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {doLogin} from '../../redux/AuthSlice'
const Header = () => {
  let dispatch = useDispatch();
  let isLoggedIn = useSelector(state=>state.AuthSlice);
  useEffect(()=>{
    if(localStorage.getItem("access-token"))
      {
        dispatch(doLogin());
      }
  },[])


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Google Photos</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
       {
        isLoggedIn
        ?
        <>
          <li className="nav-item">
        <NavLink className="nav-link"  to="/myalbum">My Album</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"  to="/logout">Logout</NavLink>
      </li>
        </>
        :
        <>
          <li className="nav-item">
        <NavLink className="nav-link"  to="/">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link"  to="/signup">Signup</NavLink>
      </li>
        </>

       }
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header
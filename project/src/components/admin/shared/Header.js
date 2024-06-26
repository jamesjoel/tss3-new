import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { doLogin } from '../../../redux/AdminAuthSlice'

const Header = () => {
  let dispatch = useDispatch();
  let adminLogin = useSelector(state=>state.AdminAuthSlice);
  
  useEffect(()=>{
    if(localStorage.getItem("admin-token")){
      dispatch(doLogin());
    }
  },[])

  return (
    <>
    <nav className='navbar navbar-expand-sm navbar-dark bg-info'>
      <div className='container'>
        <NavLink to='/admin/dashboard' className='navbar-brand bg-info'>Administrator</NavLink>
        <button className='navbar-toggler' data-toggle="collapse" data-target="#menu">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div id='menu' className='collapse navbar-collapse'>
          {
            adminLogin
            ?
            <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <NavLink to='/admin/dashboard' className='nav-link'>Dashboard</NavLink>
            </li>
            <li className='nav-item dropdown'>
              <a data-toggle="dropdown"  className='nav-link dropdown-toggle'>Destination</a>
              <div className='dropdown-menu'>

                <NavLink to='/admin/destination'   className='dropdown-item'>Add</NavLink>
                <NavLink to='/admin/destination/list'   className='dropdown-item'>List</NavLink>
              </div>
            </li>
            <li className='nav-item dropdown'>
              <a data-toggle="dropdown"  className='nav-link dropdown-toggle'>Product</a>
              <div className='dropdown-menu'>

                <NavLink to='/admin/product'   className='dropdown-item'>Add</NavLink>
                <NavLink to='/admin/product/list'   className='dropdown-item'>List</NavLink>
              </div>
            </li>
            <li className='nav-item'>
              <NavLink to='/admin/hotels' className='nav-link'>Hotels</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/admin/slider' className='nav-link'>Slider</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/admin/users' className='nav-link'>Users</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/admin/booking' className='nav-link'>Booking</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/admin/logout' className='nav-link'>Logout</NavLink>
            </li>
          </ul>
          :
          ""
          }
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <NavLink className="navbar-brand" to="/">Vacation<span>Travel Agency</span></NavLink>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
	          <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
	          
			  <li className="nav-item dropdown">
				<a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle">Destination</a>
				<div className='dropdown-menu'>
					<NavLink to='/destination/Wildlife' className='dropdown-item'>Wildlife</NavLink>
					<NavLink to='/destination/Nature' className='dropdown-item'>Nature</NavLink>
					<NavLink to='/destination/Heritage' className='dropdown-item'>Heritage</NavLink>
					<NavLink to='/destination/Spiritual' className='dropdown-item'>Spiritual</NavLink>
					
					
					
				</div>
			  </li>
	          {
				localStorage.getItem("access-token") 
				?
				<>
					<li className="nav-item"><NavLink to="/user/my-booking" className="nav-link">My-Booking</NavLink></li>
	          		<li className="nav-item"><NavLink to="/user/my-profile" className="nav-link">My-Profile</NavLink></li>
	          		<li className="nav-item"><NavLink to="/user/logout" className="nav-link">Logout</NavLink></li>
				</>
				:
				<>
					<li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>
	          		<li className="nav-item"><NavLink to="/signup" className="nav-link">Signup</NavLink></li>
				</>
			  }
			  
			  
			  
	          
	          
	          <li className="nav-item cta"><a href="#" className="nav-link">Book Now</a></li>

	        </ul>
	      </div>
	    </div>
	  </nav>
  )
}

export default Header
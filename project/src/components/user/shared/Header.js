import React, {useState, useRef, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {
	let city = useSelector(x=>x);
	let menubar = useRef();
	let menuBarHandler = ()=>{
		menubar.current.classList.remove("show");
	}

	let time = new Date();
	let [x, setX] = useState(time.toLocaleTimeString());

	

	let demo = ()=>{
		let time = new Date();
		setX(time.toLocaleTimeString())
		setTimeout(demo, 1000);
	}

	useEffect(()=>{
		demo();
	},[])
  return (
	<>
	
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <NavLink className="navbar-brand" to="/">Vacation<span>Travel Agency</span></NavLink>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div ref={menubar} className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item"><NavLink onClick={menuBarHandler} to="/" className="nav-link"><i class="fa fa-home" aria-hidden="true"></i> Home</NavLink></li>
	          <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
	          
			  <li className="nav-item dropdown">
				<a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle">Destination</a>
				<div className='dropdown-menu'>
					<NavLink onClick={menuBarHandler} to='/destination/Wildlife' className='dropdown-item'>Wildlife</NavLink>
					<NavLink onClick={menuBarHandler} to='/destination/Nature' className='dropdown-item'>Nature</NavLink>
					<NavLink onClick={menuBarHandler} to='/destination/Heritage' className='dropdown-item'>Heritage</NavLink>
					<NavLink onClick={menuBarHandler} to='/destination/Spiritual' className='dropdown-item'>Spiritual</NavLink>
					
					
					
				</div>
			  </li>
	          {
				localStorage.getItem("access-token") 
				?
				<>
					<li className="nav-item"><NavLink onClick={menuBarHandler} to="/user/my-booking" className="nav-link">My-Booking</NavLink></li>
	          		<li className="nav-item"><NavLink onClick={menuBarHandler} to="/user/my-profile" className="nav-link">My-Profile</NavLink></li>
	          		<li className="nav-item"><NavLink onClick={menuBarHandler} to="/user/logout" className="nav-link">Logout</NavLink></li>
				</>
				:
				<>
					<li className="nav-item"><NavLink onClick={menuBarHandler} to="/login" className="nav-link">Login</NavLink></li>
	          		<li className="nav-item"><NavLink onClick={menuBarHandler} to="/signup" className="nav-link">Signup</NavLink></li>
				</>
			  }
			  
			  
			  
	          
	          
	          <li className="nav-item cta"><a href="#" className="nav-link">My Cart (0)</a></li>

	        </ul>
			  {city}
	      </div>
	    </div>
	  </nav>
	  <div className='container-fluid bg-info' style={{marginTop : "100px"}}>
		<div className='row'>
			<div className='col-md-12'>
			<h4>{x}</h4>
			</div>
		</div>
	</div>
	  </>
  )
}

export default Header
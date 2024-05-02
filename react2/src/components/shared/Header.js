import {NavLink} from 'react-router-dom'
let Header = ()=>{
    return(
        <>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container">
                <a href="" className="navbar-brand">The Stepping Stone</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="menu" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/user1" className="nav-link">User1</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/user2" className="nav-link">User2</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/help" className="nav-link">Help</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about2" className="nav-link">About2</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about3" className="nav-link">About3</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/event1" className="nav-link">Event1</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/event2" className="nav-link">Event2</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/event3" className="nav-link">Event3</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/event4" className="nav-link">Event4</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/api" className="nav-link">API</NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
          </nav>
        </>
    )
}

export default Header;
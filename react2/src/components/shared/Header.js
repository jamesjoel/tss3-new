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
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
          </nav>
        </>
    )
}

export default Header;
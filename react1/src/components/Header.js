import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'


const Header = () => {
  let n = useSelector(state=>state);
  return (
    <div style={{width : "100%", backgroundColor : "#FFF000", height : "100px", paddingTop : "20px", paddingBottom : "20px"}}>
        <NavLink to="/">Component A</NavLink> 
        <NavLink to="/compb">Component B</NavLink> 
        <NavLink to="/compc">Component C</NavLink> 
        <NavLink to="/compd">Component D</NavLink> 

        <h1>Num : {n}</h1>
    </div>
  )
}

export default Header
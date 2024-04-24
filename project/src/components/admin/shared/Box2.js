import React from 'react'

const Box2 = (props) => {
    let styles = {
        backgroundColor : "#451245",
        height : "300px",
        width : "300px",
        
    }
  return (
    <div style={styles}>
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
        <p>{props.children}</p>
    </div>
  )
}

export default Box2
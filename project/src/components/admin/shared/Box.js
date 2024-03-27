import React from 'react'

const Box = (props) => {
  return (
    <div style={{ backgroundColor : "#ccc", width : "300px"}}>
        <h1>{props.x}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam omnis excepturi voluptates rerum distinctio ullam nostrum est, consectetur eligendi natus necessitatibus exercitationem beatae quod cum accusantium! Dolore, assumenda earum.</p>
    </div>
  )
}

export default Box
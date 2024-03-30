import React from 'react'

const Slider = () => {
  return (
    <div className="hero-wrap js-fullheight" style={{backgroundImage: "url('/assets/images/bg_2.jpg')", minHeight : "450px"}} data-stellar-background-ratio="0.5">
      
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
          <div style={{marginTop : "250px"}} className="col-md-9 text text-center" data-scrollax=" properties: { translateY: '70%' }">
          	
            <p className="caps" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Travel to the any corner of the world, without going around in circles</p>
            <h1 data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Make Your Tour Amazing With Us</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
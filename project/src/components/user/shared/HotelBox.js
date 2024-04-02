import React from 'react'

const HotelBox = (props) => {
  return (
    <div className="col-md-3 ">
							<div className="project-destination">
								<a href="#" className="img" style={{ backgroundImage: "url(/assets/images/place-1.jpg)" }}>
									<div className="text">
										
										<span>{props.info.name}</span>
									</div>
								</a>
							</div>
						</div>
  )
}

export default HotelBox
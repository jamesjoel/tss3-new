import React from 'react'

const RecentPostBox = (props) => {

    // 21-Aug-2020
    let date = props.info.date.split("-");
    // [21, "Aug", 2020]

  return (
    <div className="col-md-4 d-flex ">
          	<div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20" style={{backgroundImage: `url('${props.info.image}')`}}>
              </a>
              <div className="text mt-3 float-right d-block">
              	<div className="d-flex align-items-center mb-4 topp">
              		<div className="one">
              			<span className="day">{date[0]}</span>
              		</div>
              		<div className="two">
              			<span className="yr">{date[2]}</span>
              			<span className="mos">{date[1]}</span>
              		</div>
              	</div>
                <h3 className="heading"><a href="#">{props.info.title}</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
  )
}

export default RecentPostBox
import React from 'react'

const RecentPost = () => {
  return (
    <section className="ftco-section">
      <div className="container">
      	<div className="row justify-content-center pb-4">
          <div className="col-md-12 heading-section text-center ">
            <h2 className="mb-4">Recent Post</h2>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-4 d-flex ">
          	<div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20" style={{backgroundImage: "url('/assets/images/image_1.jpg')"}}>
              </a>
              <div className="text mt-3 float-right d-block">
              	<div className="d-flex align-items-center mb-4 topp">
              		<div className="one">
              			<span className="day">21</span>
              		</div>
              		<div className="two">
              			<span className="yr">2019</span>
              			<span className="mos">August</span>
              		</div>
              	</div>
                <h3 className="heading"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ">
          	<div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20" style={{backgroundImage: "url('/assets/images/image_2.jpg')"}}>
              </a>
              <div className="text mt-3 float-right d-block">
              	<div className="d-flex align-items-center mb-4 topp">
              		<div className="one">
              			<span className="day">21</span>
              		</div>
              		<div className="two">
              			<span className="yr">2019</span>
              			<span className="mos">August</span>
              		</div>
              	</div>
                <h3 className="heading"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex ">
          	<div className="blog-entry">
              <a href="blog-single.html" className="block-20" style={{backgroundImage: "url('/assets/images/image_3.jpg')"}}>
              </a>
              <div className="text mt-3 float-right d-block">
              	<div className="d-flex align-items-center mb-4 topp">
              		<div className="one">
              			<span className="day">21</span>
              		</div>
              		<div className="two">
              			<span className="yr">2019</span>
              			<span className="mos">August</span>
              		</div>
              	</div>
                <h3 className="heading"><a href="#">Why Lead Generation is Key for Business Growth</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentPost
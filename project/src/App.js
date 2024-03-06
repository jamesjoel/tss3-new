import React from 'react'

const App = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <a className="navbar-brand" href="index.html">Vacation<span>Travel Agency</span></a>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
	          <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
	          <li className="nav-item"><a href="destination.html" className="nav-link">Destination</a></li>
	          <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
	          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
	          <li className="nav-item cta"><a href="#" className="nav-link">Book Now</a></li>

	        </ul>
	      </div>
	    </div>
	  </nav>
    
    
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

   

    <section className="ftco-section services-section bg-light">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 order-md-last heading-section pl-md-5">
          	<h2 className="mb-4">It's time to start your adventure</h2>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            <p><a href="#" className="btn btn-primary py-3 px-4">Search Destination</a></p>
          </div>
          <div className="col-md-6">
          	<div className="row">
          		<div className="col-md-6 d-flex align-self-stretch ">
		            <div className="media block-6 services d-block">
		              <div className="icon"><span className="flaticon-paragliding"></span></div>
		              <div className="media-body">
		                <h3 className="heading mb-3">Activities</h3>
		                <p>A small river named Duden flows by their place and supplies it with the necessary</p>
		              </div>
		            </div>      
		          </div>
		          <div className="col-md-6 d-flex align-self-stretch ">
		            <div className="media block-6 services d-block">
		              <div className="icon"><span className="flaticon-route"></span></div>
		              <div className="media-body">
		                <h3 className="heading mb-3">Travel Arrangements</h3>
		                <p>A small river named Duden flows by their place and supplies it with the necessary</p>
		              </div>
		            </div>    
		          </div>
		          <div className="col-md-6 d-flex align-self-stretch ">
		            <div className="media block-6 services d-block">
		              <div className="icon"><span className="flaticon-tour-guide"></span></div>
		              <div className="media-body">
		                <h3 className="heading mb-3">Private Guide</h3>
		                <p>A small river named Duden flows by their place and supplies it with the necessary</p>
		              </div>
		            </div>      
		          </div>
		          <div className="col-md-6 d-flex align-self-stretch ">
		            <div className="media block-6 services d-block">
		              <div className="icon"><span className="flaticon-map"></span></div>
		              <div className="media-body">
		                <h3 className="heading mb-3">Location Manager</h3>
		                <p>A small river named Duden flows by their place and supplies it with the necessary</p>
		              </div>
		            </div>      
		          </div>
          	</div>
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-counter img" id="section-counter">
    	<div className="container">
    		<div className="row d-flex">
    			<div className="col-md-6 d-flex">
    				<div className="img d-flex align-self-stretch" style={{backgroundImage:"url(/assets/images/about.jpg)"}}></div>
    			</div>
    			<div className="col-md-6 pl-md-5 py-5">
    				<div className="row justify-content-start pb-3">
		          <div className="col-md-12 heading-section ">
		            <h2 className="mb-4">Make Your Tour Memorable and Safe With Us</h2>
		            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
		          </div>
		        </div>
		    		<div className="row">
		          <div className="col-md-4 justify-content-center counter-wrap ">
		            <div className="block-18 text-center mb-4">
		              <div className="text">
		                <strong className="number" data-number="300">0</strong>
		                <span>Successful Tours</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md-4 justify-content-center counter-wrap ">
		            <div className="block-18 text-center mb-4">
		              <div className="text">
		                <strong className="number" data-number="24000">0</strong>
		                <span>Happy Tourist</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md-4 justify-content-center counter-wrap ">
		            <div className="block-18 text-center mb-4">
		              <div className="text">
		                <strong className="number" data-number="200">0</strong>
		                <span>Place Explored</span>
		              </div>
		            </div>
		          </div>
		        </div>
	        </div>
        </div>
    	</div>
    </section>


		<section className="ftco-section">
    	<div className="container">
    		<div className="row justify-content-center pb-4">
          <div className="col-md-12 heading-section text-center ">
            <h2 className="mb-4">Best Place Destination</h2>
          </div>
        </div>
        <div className="row">
        	<div className="col-md-3 ">
        		<div className="project-destination">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/place-1.jpg)"}}>
        				<div className="text">
        					<h3>Singapore</h3>
        					<span>8 Tours</span>
        				</div>
        			</a>
        		</div>
        	</div>
        	<div className="col-md-3 ">
        		<div className="project-destination">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/place-2.jpg)"}}>
        				<div className="text">
        					<h3>Canada</h3>
        					<span>2 Tours</span>
        				</div>
        			</a>
        		</div>
        	</div>
        	<div className="col-md-3 ">
        		<div className="project-destination">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/place-3.jpg)"}}>
        				<div className="text">
        					<h3>Thailand</h3>
        					<span>5 Tours</span>
        				</div>
        			</a>
        		</div>
        	</div>
        	<div className="col-md-3 ">
        		<div className="project-destination">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/place-4.jpg)"}}>
        				<div className="text">
        					<h3>Autralia</h3>
        					<span>5 Tours</span>
        				</div>
        			</a>
        		</div>
        	</div>
        </div>
    	</div>
    </section>

    <section className="ftco-section ftco-no-pt">
    	<div className="container">
    		<div className="row justify-content-center pb-4">
          <div className="col-md-12 heading-section text-center ">
            <h2 className="mb-4">Tour Destination</h2>
          </div>
        </div>
        <div className="row">
        	<div className="col-md-4 ">
        		<div className="project-wrap">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/destination-1.jpg)"}}></a>
        			<div className="text p-4">
        				<span className="price">$300/person</span>
        				<span className="days">8 Days Tour</span>
        				<h3><a href="#">Bali, Indonesia</a></h3>
        				<p className="location"><span className="ion-ios-map"></span> Bali, Indonesia</p>
        				<ul>
        					<li><span className="flaticon-shower"></span>2</li>
        					<li><span className="flaticon-king-size"></span>3</li>
        					<li><span className="flaticon-mountains"></span>Near Mountain</li>
        				</ul>
        			</div>
        		</div>
        	</div>
        	<div className="col-md-4 ">
        		<div className="project-wrap">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/destination-2.jpg)"}}></a>
        			<div className="text p-4">
        				<span className="price">$300/person</span>
        				<span className="days">10 Days Tour</span>
        				<h3><a href="#">Bali, Indonesia</a></h3>
        				<p className="location"><span className="ion-ios-map"></span> Bali, Indonesia</p>
        				<ul>
        					<li><span className="flaticon-shower"></span>2</li>
        					<li><span className="flaticon-king-size"></span>3</li>
        					<li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
        				</ul>
        			</div>
        		</div>
        	</div>
        	<div className="col-md-4 ">
        		<div className="project-wrap">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/destination-3.jpg)"}}></a>
        			<div className="text p-4">
        				<span className="price">$300/person</span>
        				<span className="days">7 Days Tour</span>
        				<h3><a href="#">Bali, Indonesia</a></h3>
        				<p className="location"><span className="ion-ios-map"></span> Bali, Indonesia</p>
        				<ul>
        					<li><span className="flaticon-shower"></span>2</li>
        					<li><span className="flaticon-king-size"></span>3</li>
        					<li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
        				</ul>
        			</div>
        		</div>
        	</div>

        	<div className="col-md-4 ">
        		<div className="project-wrap">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/destination-4.jpg)"}}></a>
        			<div className="text p-4">
        				<span className="price">$300/person</span>
        				<span className="days">8 Days Tour</span>
        				<h3><a href="#">Bali, Indonesia</a></h3>
        				<p className="location"><span className="ion-ios-map"></span> Bali, Indonesia</p>
        				<ul>
        					<li><span className="flaticon-shower"></span>2</li>
        					<li><span className="flaticon-king-size"></span>3</li>
        					<li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
        				</ul>
        			</div>
        		</div>
        	</div>
        	<div className="col-md-4 ">
        		<div className="project-wrap">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/destination-5.jpg)"}}></a>
        			<div className="text p-4">
        				<span className="price">$300/person</span>
        				<span className="days">10 Days Tour</span>
        				<h3><a href="#">Bali, Indonesia</a></h3>
        				<p className="location"><span className="ion-ios-map"></span> Bali, Indonesia</p>
        				<ul>
        					<li><span className="flaticon-shower"></span>2</li>
        					<li><span className="flaticon-king-size"></span>3</li>
        					<li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
        				</ul>
        			</div>
        		</div>
        	</div>
        	<div className="col-md-4 ">
        		<div className="project-wrap">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/destination-6.jpg)"}}></a>
        			<div className="text p-4">
        				<span className="price">$300/person</span>
        				<span className="days">7 Days Tour</span>
        				<h3><a href="#">Bali, Indonesia</a></h3>
        				<p className="location"><span className="ion-ios-map"></span> Bali, Indonesia</p>
        				<ul>
        					<li><span className="flaticon-shower"></span>2</li>
        					<li><span className="flaticon-king-size"></span>3</li>
        					<li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
        				</ul>
        			</div>
        		</div>
        	</div>
        </div>
    	</div>
    </section>

    <section className="ftco-section testimony-section bg-bottom" style={{backgroundImage: "url(/assets/images/bg_3.jpg)"}}>
      <div className="container">
        <div className="row justify-content-center pb-4">
          <div className="col-md-7 text-center heading-section ">
            <h2 className="mb-4">Tourist Feedback</h2>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel ftco-owl">
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center">
                    	<div className="user-img" style={{backgroundImage: "url(/assets/images/person_1.jpg)"}}></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center">
                    	<div className="user-img" style={{backgroundImage: "url(/assets/images/person_2.jpg)"}}></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center">
                    	<div className="user-img" style={{backgroundImage: "url(/assets/images/person_3.jpg)"}}></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center">
                    	<div className="user-img" style={{backgroundImage: "url(/assets/images/person_1.jpg)"}}></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="text">
                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="d-flex align-items-center">
                    	<div className="user-img" style={{backgroundImage: "url(/assets/images/person_2.jpg)"}}></div>
                    	<div className="pl-3">
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Marketing Manager</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


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

    <footer className="ftco-footer bg-bottom" style={{backgroundImage: "url(/assets/images/footer-bg.jpg)"}}>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Vacation</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className=""><a href="#"><span className="icon-twitter"></span></a></li>
                <li className=""><a href="#"><span className="icon-facebook"></span></a></li>
                <li className=""><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Infromation</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">Online Enquiry</a></li>
                <li><a href="#" className="py-2 d-block">General Enquiries</a></li>
                <li><a href="#" className="py-2 d-block">Booking Conditions</a></li>
                <li><a href="#" className="py-2 d-block">Privacy and Policy</a></li>
                <li><a href="#" className="py-2 d-block">Refund Policy</a></li>
                <li><a href="#" className="py-2 d-block">Call Us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Experience</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">Adventure</a></li>
                <li><a href="#" className="py-2 d-block">Hotel and Restaurant</a></li>
                <li><a href="#" className="py-2 d-block">Beach</a></li>
                <li><a href="#" className="py-2 d-block">Nature</a></li>
                <li><a href="#" className="py-2 d-block">Camping</a></li>
                <li><a href="#" className="py-2 d-block">Party</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
	                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

            <p></p>
          </div>
        </div>
      </div>
    </footer>
    
  

  
  
    </>
  )
}

export default App
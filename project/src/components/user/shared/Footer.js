import React from 'react'

const Footer = () => {
  return (
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
  
  )
}

export default Footer
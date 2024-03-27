import React, { useState, useEffect } from 'react'
import Slider from '../shared/Slider'
import RecentPost from '../shared/RecentPost'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'
import DestinationBox from '../shared/DestinationBox'


const Home = () => {

	let [allDestination, setAllDestination] = useState([]);
	useEffect(() => {
		axios.get(`${API_URL}/destination`).then(response => {
			setAllDestination(response.data);
		})
	}, [])


	return (
		<>
			<Slider />
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
								<a href="#" className="img" style={{ backgroundImage: "url(/assets/images/place-1.jpg)" }}>
									<div className="text">
										<h3>Singapore</h3>
										<span>8 Tours</span>
									</div>
								</a>
							</div>
						</div>
						<div className="col-md-3 ">
							<div className="project-destination">
								<a href="#" className="img" style={{ backgroundImage: "url(/assets/images/place-2.jpg)" }}>
									<div className="text">
										<h3>Canada</h3>
										<span>2 Tours</span>
									</div>
								</a>
							</div>
						</div>
						<div className="col-md-3 ">
							<div className="project-destination">
								<a href="#" className="img" style={{ backgroundImage: "url(/assets/images/place-3.jpg)" }}>
									<div className="text">
										<h3>Thailand</h3>
										<span>5 Tours</span>
									</div>
								</a>
							</div>
						</div>
						<div className="col-md-3 ">
							<div className="project-destination">
								<a href="#" className="img" style={{ backgroundImage: "url(/assets/images/place-4.jpg)" }}>
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
							<h2 className="mb-4">Latest Destination</h2>
						</div>
					</div>
					<div className="row">

						{
							allDestination.map(value => {
								return(
									<DestinationBox value={value} />
								)
							})
						}


					</div>
				</div>
			</section>
			<RecentPost />
		</>
	)
}

export default Home
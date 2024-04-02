import React, { useState, useEffect } from 'react'
import Slider from '../shared/Slider'
import RecentPost from '../shared/RecentPost'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'
import DestinationBox from '../shared/DestinationBox'
import HotelBox from '../shared/HotelBox'


const Home = () => {

	let [allDestination, setAllDestination] = useState([]);
	let [allHotels, setAllHotels] = useState([]);
	useEffect(() => {
		axios.get(`${API_URL}/destination`).then(response => {
			setAllDestination(response.data);
		})
		axios.get(`${API_URL}/hotels`).then(response => {
			setAllHotels(response.data);
		})
	}, [])


	return (
		<>
			<Slider />
			<section className="ftco-section">
				<div className="container">
					<div className="row justify-content-center pb-4">
						<div className="col-md-12 heading-section text-center ">
							<h2 className="mb-4">Best Place Hotels in Goa</h2>
						</div>
					</div>
					<div className="row">
						{
							allHotels.map(value=><HotelBox info={value} />)
						}
						
						
						
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
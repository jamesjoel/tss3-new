import React, { useState, useEffect } from 'react'
import Slider from '../shared/Slider'
import RecentPost from '../shared/RecentPost'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'
import DestinationBox from '../shared/DestinationBox'
import HotelBox from '../shared/HotelBox'
import ProductBox from '../shared/ProductBox'


const Home = () => {

	let [allDestination, setAllDestination] = useState([]);
	let [allHotels, setAllHotels] = useState([]);
	let [allPro, setAllPro] = useState([]);
	useEffect(() => {
		getAllData();
	}, [])

	let getAllData = async()=>{
		
		let response1 = await axios.get(`${API_URL}/destination`)
		setAllDestination(response1.data);

		let response2 = await axios.get(`${API_URL}/hotels`);
		setAllHotels(response2.data);
	}

	useEffect(()=>{
		getAllPro();
	},[])

	let getAllPro = async()=>{
		let response = await axios.get(`${API_URL}/product`);
		setAllPro(response.data);
	}


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
			<section className="ftco-section">
				<div className="container">
					<div className="row justify-content-center pb-4">
						<div className="col-md-12 heading-section text-center ">
							<h2 className="mb-4">Recent Product</h2>
						</div>
					</div>
					<div className="row">
					{
						allPro.map(item=><ProductBox key={item._id} info={item} />)
					}	
						
						
					</div>
				</div>
			</section>
		</>
	)
}

export default Home
/*
	useEffect(()=>{

		axios.get("info1").then(response1=>{
			setVar1(response1.data);
			axios.get("info2").then(response2=>{
				setVar2(response2.data);
				axios.get("info3").then(response3=>{
					setVar3(response3.data);
					axios.get("info4").then(response4=>{
						setVar4(response4.data);
					})
				})
			})

		})



	},[])




	let demo = async()=>{
		let response1 = await axios.get("info1");
		setVar1(response1.data);
		let response2 = await axios.get("info2");
		setVar2(response2.data);
		let response3 = await axios.get("info3");
		setVar3(response3.data);
		let response4 = await axios.get("info4");
		setVar4(response4.data);
	}

	useEffect(()=>{
		demo();
	},[])



*/
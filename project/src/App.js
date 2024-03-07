import React from 'react'
import AllRoutes from './allRoutes/AllRoutes'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Slider from './components/shared/Slider'

const App = () => {
  return (
    <>
		<Header />
			<AllRoutes />
		<Footer />
    </>
  )
}

export default App
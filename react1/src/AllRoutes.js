import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CompA from './components/CompA'
import CompB from './components/CompB'
import CompC from './components/CompC'
import CompoD from './components/CompoD'
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CompA />} />
        <Route path="/compb" element={<CompB />} />
        <Route path="/compc" element={<CompC />} />
        <Route path="/compd" element={<CompoD />} />
      </Routes>
    </>
  )
}

export default AllRoutes
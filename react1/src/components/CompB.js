import React from 'react'
import {dec} from '../redux/NumSlice'
import {useDispatch} from 'react-redux'

const CompB = () => {
  let dispatch = useDispatch();
  return (
    <>
    <button onClick={()=> dispatch(dec())}>Dec</button>
    
    </>
  )
}

export default CompB
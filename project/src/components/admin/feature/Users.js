import React from 'react'
import Box from '../shared/Box'

const Users = () => {

  let x = "Pune";
  let y = "Delhi";
  let z = "Dewas";

  return (
    <>
    <div>Users</div>
    <Box x={x}/>
    <Box x={y}/>
    <Box x={z}/>
    </>
  )
}

export default Users
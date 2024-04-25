import React, {useContext} from 'react'
import UserContext from './UserContext'
import DemoContext from './DemoContext';

const Child4 = () => {

    let data = useContext(UserContext);

    let x = useContext(DemoContext);

  return (
    <>
    <div>Child4</div>
    <h1>{data[0].name}</h1>
    <h1>{x}</h1>
    </>
  )
}

export default Child4
import React, {useEffect} from 'react'
import Slider from '../shared/Slider'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../util/API_URL'

const Destination = () => {

  let params = useParams();
  useEffect(()=>{

    axios.get(`${API_URL}/destination/${params.x}`).then(response=>{
      console.log(response.data);
    })

  },[])

  return (
    <>
    <Slider />
    <div className="container" style={{marginTop : "100px", minHeight : "600px"}}>
        <div className="row">
            <h2>Destination Page</h2>
        </div>
    </div>
    </>
  )
}

export default Destination
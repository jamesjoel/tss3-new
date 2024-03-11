import React, {useState, useEffect} from 'react'
import Slider from '../shared/Slider'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {

  let [city, setCity] = useState([]);
  
  // let city = null;

  useEffect(()=>{
    axios.get("http://localhost:8080/api/city").then(response=>{
      console.log(response.data);
      setCity(response.data);
    })
  },[])

  return (
    <>
    <Slider />
    <div className="container" style={{marginTop : "100px", minHeight : "600px"}}>
        <div className="row">
            <div className='col-md-6 offset-md-3'>
              <div className='card'>
                <div className='card-header bg-dark border border-dark'>
                  <h5 style={{color : "#fff"}}>User Registration</h5>
                  <small>If you already member <NavLink to="/login">click here</NavLink></small>
                </div>

                <div className="card-body">
                  <div className='my-4'>
                    <label>Full Name</label>
                    <input type='text' className='form-control' />
                  </div>
                  <div className='my-4'>
                    <label>Username/Email</label>
                    <input type='text' className='form-control' />
                  </div>
                  <div className='my-4'>
                    <label>Password</label>
                    <input type='password' className='form-control' />
                  </div>
                  <div className='my-4'>
                    <label>Re-Password</label>
                    <input type='password' className='form-control' />
                  </div>
                  
                  <div className='my-4'>
                    <label>Gender</label>
                    <br />
                    Male <input type='radio' />
                    Female <input type='radio' />
                  </div>
                  <div className='my-4'>
                    <label>Contact</label>
                    <input type='text' className='form-control' />
                  </div>
                  <div className='my-4'>
                    <label>Address</label>
                    <textarea className='form-control' ></textarea>
                  </div>
                  <div className='my-4'>
                    <label>City</label>
                    <select className='form-control' >
                      <option>Select</option>
                      {
                        city.map(value=><option>{value.name}</option>)
                      }
                    </select>
                  </div>
                </div>
                
                <div className="card-footer">
                  {/* <div class="d-grid">
                  </div> */}
                  <button className='btn btn-success btn-block'>Signup</button>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup
import React, {useState, useEffect} from 'react'
import Slider from '../shared/Slider'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {

  let [user, setUser] = useState({
    name : "",
    email : "",
    password : "",
    repassword : "",
    gender : "",
    city : "",
    state : "",
    contact : "",
    address : ""
  })

  let [city, setCity] = useState([]);
  let [state, setState] = useState([]);
  // let city = null;

  useEffect(()=>{
    axios.get("http://localhost:8080/api/city/state").then(response=>{
      setState(response.data);
    })
  },[])

 
  let getcity = (event)=>{
    let x = event.target.value;
    axios.get("http://localhost:8080/api/city/getcitybystate/"+x).then(response=>{
      setCity(response.data);
    })
  }

  let save = ()=>{
    axios.post("http://localhost:8080/api/signup", user).then(response=>{
      console.log(response);
    })
  }

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
                    <input type='text' onChange={(event)=>setUser({...user, name : event.target.value})} className='form-control' />
                  </div>
                  <div className='my-4'>
                    <label>Username/Email</label>
                    <input type='text' onChange={(event)=>setUser({...user, email : event.target.value})} className='form-control' />
                  </div>
                  <div className='my-4'>
                    <label>Password</label>
                    <input type='password' onChange={(event)=>setUser({...user, password : event.target.value})} className='form-control' />
                  </div>
                  <div className='my-4'>
                    <label>Re-Password</label>
                    <input type='password' onChange={(event)=>setUser({...user, repassword : event.target.value})} className='form-control' />
                  </div>
                  
                  <div className='my-4'>
                    <label>Gender</label>
                    <br />
                    Male <input type='radio' value="male" onChange={(event)=>setUser({...user, gender : event.target.value})}/>
                    Female <input type='radio' value="female" onChange={(event)=>setUser({...user, gender : event.target.value})}/>
                  </div>
                  <div className='my-4'>
                    <label>Contact</label>
                    <input type='text' onChange={(event)=>setUser({...user, contact : event.target.value})} className='form-control' />
                  </div>
                  <div className='my-4'>
                    <label>Address</label>
                    <textarea className='form-control' onChange={(event)=>setUser({...user, address : event.target.value})}></textarea>
                  </div>
                  <div className='my-4'>
                    <label>State</label>
                    <select onChange={(event)=>{getcity(event); setUser({...user, state : event.target.value})}} className='form-control' >
                      <option>Select</option>
                      {
                        state.map((value, index)=><option key={index}>{value}</option>)
                      }
                    </select>
                  </div>
                  <div className='my-4'>
                    <label>City</label>
                    <select className='form-control' onChange={(event)=>setUser({...user, city : event.target.value})}>
                      <option>Select</option>
                      {
                        city.map(value=><option key={value._id}>{value.name}</option>)
                      }
                    </select>
                  </div>
                </div>
                
                <div className="card-footer">
                  {/* <div class="d-grid">
                  </div> */}
                  <button onClick={save} className='btn btn-success btn-block'>Signup</button>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup
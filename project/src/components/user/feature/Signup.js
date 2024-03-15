import React, {useState, useEffect} from 'react'
import Slider from '../shared/Slider'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
const Signup = () => {
  let navigate = useNavigate();

  let signupForm = useFormik({
    initialValues : {
      name : "",
      email : "",
      password : "",
      repassword : "",
      gender : "",
      city : "",
      state : "",
      contact : "",
      address : ""
    },
    onSubmit : (formdata)=>{
      axios.post("http://localhost:8080/api/signup", formdata).then(response=>{
        navigate("/login");
      })
    }
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

  

  return (
    <>
    <Slider />
    <div className="container" style={{marginTop : "100px", minHeight : "600px"}}>
        <div className="row">
            <div className='col-md-6 offset-md-3'>
              <form onSubmit={signupForm.handleSubmit}>
              <div className='card'>
                <div className='card-header bg-dark border border-dark'>
                  <h5 style={{color : "#fff"}}>User Registration</h5>
                  <small>If you already member <NavLink to="/login">click here</NavLink></small>
                </div>

                <div className="card-body">
                  <div className='my-4'>
                    <label>Full Name</label>
                    <input type='text' name='name' onChange={signupForm.handleChange} className='form-control' />
                  </div>
                  <div className='my-4'>
                    <label>Username/Email</label>
                    <input type='text' name='email' onChange={signupForm.handleChange}  className='form-control' />
                  </div>
                  <div className='my-4'>
                    <label>Password</label>
                    <input type='password' name='password' onChange={signupForm.handleChange} className='form-control' />
                  </div>
                  <div className='my-4'>
                    <label>Re-Password</label>
                    <input type='password' name='repassword' onChange={signupForm.handleChange} className='form-control' />
                  </div>
                  
                  <div className='my-4'>
                    <label>Gender</label>
                    <br />
                    Male <input type='radio' value="male" name='gender' onChange={signupForm.handleChange}/>
                    Female <input type='radio' value="female" name='gender' onChange={signupForm.handleChange}/>
                  </div>
                  <div className='my-4'>
                    <label>Contact</label>
                    <input type='text' name='contact' onChange={signupForm.handleChange} className='form-control' />
                  </div>
                  <div className='my-4'>
                    <label>Address</label>
                    <textarea className='form-control' name='address' onChange={signupForm.handleChange} ></textarea>
                  </div>
                  <div className='my-4'>
                    <label>State</label>
                    <select onChange={(event)=>{getcity(event); signupForm.handleChange(event)}} className='form-control' >
                      <option>Select</option>
                      {
                        state.map((value, index)=><option key={index}>{value}</option>)
                      }
                    </select>
                  </div>
                  <div className='my-4'>
                    <label>City</label>
                    <select className='form-control' name='city' onChange={signupForm.handleChange}>
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
                  <button type='submit' className='btn btn-success btn-block'>Signup</button>
                </div>
              </div>
              </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup
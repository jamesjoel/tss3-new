import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import API_URL from '../../util/API_URL'
import {useNavigate} from 'react-router-dom'
const Signup = () => {
    let navigate = useNavigate();
    let signupForm = useFormik({
        initialValues : {
        name : "",
        email : "",
        password : ""
        },
        onSubmit : async(formdata)=>{
            let response = await axios.post(`${API_URL}/signup`, formdata);
            navigate("/");
        }
    })
  return (
    <div className="container my-4" style={{ minHeight : "600px"}}>
        <div className="row">
            <div className='col-md-6 offset-md-3'>
              <form onSubmit={signupForm.handleSubmit}>
              <div className='card'>
                <div className='card-header bg-dark border border-dark'>
                  <h5 style={{color : "#fff"}}>User Registration</h5>
                  
                </div>

                <div className="card-body">
                  <div className='my-4'>
                    <label>Full Name</label>
                    <input type='text' name='name' onChange={signupForm.handleChange} className={'form-control'} />
                    
                  </div>
                  <div className='my-4'>
                    <label>Username/Email</label>
                    <input type='text' name='email' onChange={signupForm.handleChange}  className={'form-control'} />
                    
                  </div>
                  <div className='my-4'>
                    <label>Password</label>
                    <input type='password' name='password' onChange={signupForm.handleChange} className={'form-control'} />
                    
                  </div>
                  
                </div>
                
                <div className="card-footer">
                  
                  <button type='submit' className='btn btn-success btn-block'>Signup</button>
                </div>
              </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
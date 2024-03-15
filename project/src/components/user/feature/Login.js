import React from 'react'
import Slider from '../shared/Slider'
import {NavLink} from 'react-router-dom'
import { useFormik } from 'formik'
const Login = () => {

  let loginForm = useFormik({
    initialValues : { email : "", password : "" },
    onSubmit : (formdata)=>{
      console.log(formdata)
    }
  })

  return (
    <>
    <Slider />
    <div className="container" style={{marginTop : "100px", minHeight : "600px"}}>
        <div className="row">
            <div className='col-md-6 offset-md-3'>
              <form onSubmit={loginForm.handleSubmit}>
              <div className='card'>
                <div className='card-header bg-dark border border-dark'>
                  <h5 style={{color : "#fff"}}>User Login</h5>
                  <small>If you are new user <NavLink to="/signup">click here</NavLink></small>
                </div>

                <div className="card-body">
                  <div className='my-4'>
                    <label>Username/Email</label>
                    <input type='text' name='email' onChange={loginForm.handleChange} className='form-control' />
                  </div>
                  <div className='my-4'>
                    <label>Password</label>
                    <input type='password' name='password' onChange={loginForm.handleChange} className='form-control' />
                  </div>
                </div>
                <div className="card-footer">
                  {/* <div class="d-grid">
                  </div> */}
                  <button type='submit' className='btn btn-success btn-block'>Login</button>
                </div>
              </div>
              </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
import React, { useState } from 'react'
import Slider from '../shared/Slider'
import { useFormik } from 'formik'
import { API_URL } from '../../../util/API_URL'
import axios from 'axios'
const ForgotPassword = () => {
    let [errMsg, setErrMsg] = useState("");
    let [showForm, setShowForm] = useState(false);

    let otpForm = useFormik({
        enableReinitialize : true,
        initialValues : {
            otp : ""
        },
        onSubmit : (formdata)=>{
            console.log(formdata)
        }
    })

    let forgotForm = useFormik({
        initialValues : {
            username : ""
        },
        onSubmit : async (formdata, {resetForm})=>{
            let response = await axios.post(`${API_URL}/signup/forgot`, formdata);
            if(response.data.success==true)
            {
                console.log(response.data);
                resetForm();
                setShowForm(true);
            }else{
                setErrMsg("This Email id not registered");
            }
        }
    })
  return (
    <>
    <Slider />
    <div className="container" style={{marginTop : "100px", minHeight : "400px"}}>
        {
            showForm==false 
            ?
            <form onSubmit={forgotForm.handleSubmit}>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h4>Forgot Your Password</h4>
                        <label>Insert Your Email Id</label>
                        <input value={forgotForm.values.username} name='username' onChange={forgotForm.handleChange} type='text' className='form-control' />
                        <br />
                        <button type='submit' className='btn btn-info'>Get A Link</button>
                        <br />
                        <small className='text-danger text-center'>{errMsg}</small>
                    </div>
                </div>
            </form>
             :   
            <form onSubmit={otpForm.handleSubmit}>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <h4>Insert OTP</h4>
                        <label>OTP</label>
                        <input name='otp' onChange={otpForm.handleChange} type='text' className='form-control' />
                        <br />
                        <button type='submit' className='btn btn-info'>Enter OTP</button>
                    </div>
                </div>
            </form>
        }
    </div>
    </>
  )
}

export default ForgotPassword
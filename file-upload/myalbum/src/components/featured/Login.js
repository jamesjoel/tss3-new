import React, {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import API_URL from '../../util/API_URL'
import {useDispatch} from 'react-redux'
import {doLogin} from '../../redux/AuthSlice'

const Login = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("access-token"))
            {
                navigate("/myalbum")
            }
    },[])

    let [spinner, setSpinner] = useState(false);
    let [errMsg, setErrMsg] = useState("");
    let loginFrm = useFormik({
        
        initialValues : {
            email : "",
            password : ""
        },
        onSubmit : async(formdata)=>{
            
            setSpinner(true);
            try{

                let response = await axios.post(`${API_URL}/auth`, formdata);
                // console.log(response.data)
                localStorage.setItem("access-token", response.data.token);
                dispatch(doLogin());
                navigate("/myalbum");
            }catch{
                
                setSpinner(false);
                setErrMsg("This Email and Password is Incorrect ");
            }
            
        }
    })

  return (
    <div className="container my-5">
        <div className="row">
            <form onSubmit={loginFrm.handleSubmit}>
            <div className="col-md-6 offset-md-3">
                <h4>Login</h4>
                <div className='my-2'>
                    <label>Username/Email</label>
                    <input name='email' onChange={loginFrm.handleChange} type='text' className={'form-control'} />
                </div>
                <div className='my-2'>
                    <label>Password</label>
                    <input name='password' onChange={loginFrm.handleChange} type='password' className={'form-control'} />
                </div>
                <p className='text-danger text-center'>{errMsg}</p>
                <br />
                <button type='submit' className='btn btn-success'>Login {spinner ? <span className='spinner-border spinner-border-sm'></span> : ''}</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Login
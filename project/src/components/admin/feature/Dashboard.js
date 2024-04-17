import React, {useRef} from 'react'
import {useFormik} from 'formik'
import {API_URL} from '../../../util/API_URL'
import axios from 'axios'

const Dashboard = () => {
  let x = useRef();
  let form = useFormik({
    initialValues : {
      name : "",
      image : ""
    },
    onSubmit : async(formdata)=>{
      console.log(formdata)
      console.log(x.current.files[0]);
      let myform = new FormData();
      myform.append("name1", formdata.name);
      myform.append("image1", x.current.files[0]);
      
      await axios.post(`${API_URL}/demo/upload`, myform);
    }
  })

  return (
    <>
      <div className='container my-4'>
        Dashboard
        {/* <form onSubmit={form.handleSubmit}>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>

              <label>Name</label>
              <input type='text' name='name' onChange={form.handleChange} className='form-control' />
              <br />
              <label>Select Image</label>
              <input ref={x} type='file' name='image' onChange={form.handleChange} className='form-control' />
              <br />
              <button className='btn btn-primary' type='submit'>Upload</button>
            </div>
          </div>
        </form> */}
      </div>
    </>
  )
}

export default Dashboard

/*
  text
  textarea
  radio
  checkbox
  submit
  reset
  password
  hidden
  select
  button
  file
*/
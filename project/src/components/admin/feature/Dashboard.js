import React, {useRef} from 'react'
import {useFormik} from 'formik'
import {API_URL} from '../../../util/API_URL'
import axios from 'axios'
import Box2 from '../shared/Box2'

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
       <Box2 name={'rohit'} age = {25} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore possimus, debitis nisi sit libero eligendi est id eos molestias culpa earum ut omnis, iste, illum similique deserunt reprehenderit. Non, accusamus.</Box2>
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
import React, {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import {API_URL} from '../../../util/API_URL'
import {NavLink, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
const Hotels = () => {
    let navigate = useNavigate();
    let params = useParams();

    let [city, setCity] = useState([]);
    let [hotel, setHotel] = useState({
      name : "",
      address : "",
      city : "",
      contact : "",
      email : ""
      
    })

    useEffect(()=>{
        axios.get(`${API_URL}/city/getcitybystate/Goa`).then(response=>{
            setCity(response.data);
            
          })
    },[])

  let addForm = useFormik({
    initialValues : hotel,
    enableReinitialize : true,
    onSubmit : (formdata)=>{
      if(params.id){
        axios.put(`${API_URL}/hotels/${params.id}`, formdata).then(response=>{
          // console.log(response.data);
          navigate("/admin/hotels/list");
        })
      }else{

        axios.post(`${API_URL}/hotels`, formdata).then(response=>{
          // console.log(response.data);
          navigate("/admin/hotels/list");
        })
      }
    }
  })
  useEffect(()=>{
    getData();
  },[])

  let getData = ()=>{
    if(params.id){
      axios.get(`${API_URL}/hotels/${params.id}`).then(response=>{
        setHotel(response.data);
      })
    }
  }

  return (
    <div className="container my-4">
      <NavLink to="/admin/hotels/list" className="btn btn-info">View All Hotels</NavLink>
        <form onSubmit={addForm.handleSubmit}>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h3 className='text-center'>{params.id ? "Update" : "Add"} Hotels</h3>
          <div className='my-3'>
            <label>Hotel Name</label>
            <input type='text' value={addForm.values.name} name='name' onChange={addForm.handleChange} className='form-control' />
          </div>
          <div className='my-3'>
            <label>City</label>
            <select name='city' value={addForm.values.city} onChange={addForm.handleChange} className='form-control' >
              <option>Select</option>
              {
                city.map(value=><option key={value._id}>{value.name}</option>)
              }
            </select>
          </div>
          <div className='my-3'>
            <label>Address</label>
            <textarea name='address' value={addForm.values.address} onChange={addForm.handleChange} className='form-control' rows="10"></textarea>
          </div>
          <div className='my-3'>
            <label>Hotel Contact Number</label>
            <input type='text' value={addForm.values.contact} name='contact' onChange={addForm.handleChange} className='form-control' />
          </div>
          <div className='my-3'>
            <label>Hotel Contact Email Id</label>
            <input type='text' value={addForm.values.email} name='email' onChange={addForm.handleChange} className='form-control' />
          </div>
          <br />
          <button type='submit' className='btn btn-primary'>{params.id ? "Update" : "Add"}</button>
        </div>
      </div>
        </form>
    </div>
  )
}

export default Hotels
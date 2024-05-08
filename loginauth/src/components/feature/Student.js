import React, {useState, useEffect, useRef} from 'react'
import { NavLink } from 'react-router-dom'
import axios, { all } from 'axios'
import API_URL from '../../util/API_URL'
import { useNavigate } from 'react-router-dom'

const Student = () => {
  let navigate = useNavigate();
  let [fee, setFee] = useState("");
  let [allStu, setAllStu] = useState([]);
  let [stu, setStu] = useState({});
  let closeBtn = useRef();

  

  let getData = async()=>{
    let result = await axios.get(`${API_URL}`);
    setAllStu(result.data);
  }

  let askDelete = (obj)=>{
    setStu(obj);
  }

  let confDelete = async ()=>{
    let result = await axios.delete(`${API_URL}/${stu.id}`);
    setAllStu(()=>{
      return allStu.filter(item=> item.id != stu.id);
    })
    closeBtn.current.click();
  }

  let askEdit = (obj)=>{
    navigate("/student/edit/"+obj.id);
  }
  let updateFee = async()=>{
    let obj = {fee : fee};

    

    let response = await axios.post(`${API_URL}`);
    console.log(response.data);
  }
  return (
    <>
    <div className="row">
        <div className="col-md-12 my-3">
          <div className='row'>
            <div className='col-md-2'>
                <NavLink to="/student/add" className="btn btn-info">Add New Student</NavLink>

            </div>
            <div className='col-md-8'>
            
            <input type='text' value={fee} onChange={(e)=>setFee(e.target.value)} className='form-control' />
            </div>
            <div className='col-md-2'>
              <button className='btn btn-info' onClick={updateFee}>Update Fee</button>
            </div>
          </div>
            <br />
            <table className='table table-dark mt-3'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Fee</th>
                  <th>Gender</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  allStu.map((item, index)=>{
                    return(
                      <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.fee}</td>
                        <td>{item.gender}</td>
                        <td><button onClick={()=>askEdit(item)} className='btn btn-sm btn-info'>Edit</button></td>
                        <td><button onClick={()=>askDelete(item)} data-bs-toggle="modal" data-bs-target="#delModal" className='btn btn-sm btn-danger'>Delete</button></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
        </div>
    </div>



    <div className="modal fade" id="delModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Delete Student</h4>
          </div>
          <div className="modal-body">
            <p>Are you sure want to delete <b>{stu.name}</b></p>
          </div>
          <div className="modal-footer">
            <button onClick={confDelete} className='btn btn-danger'>Delete</button>
            <button ref={closeBtn} data-bs-dismiss="modal" className='btn btn-dark'>Close</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Student
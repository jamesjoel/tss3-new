import React, {useState} from 'react'
import axios from 'axios'

const API = () => {

  let [user, setUser] = useState([]);

  let [showSpinner, setShowSpinner] = useState(false);

  let getdata = ()=>{
    setShowSpinner(true);
    axios.get("https://jsonplaceholder.typicode.com/users").then(response=>{
      setUser(response.data);
      setShowSpinner(false)
    })
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
            <h2>Network Request in React Using Axios</h2>
            <button onClick={getdata} className='btn btn-primary'>Get Data { showSpinner == true ? <span className='spinner-border spinner-border-sm'></span> : ''}</button>
            <br />
            {
              user.length > 0 
              ?
              <table className='table table-dark my-3'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Contact</th>
                  <th>Company Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map((value, index)=>{
                    return(
                      <tr>
                        <td>{index+1}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.address.city}</td>
                        <td>{value.phone}</td>
                        <td>{value.company.name}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
              :
              <div className='alert alert-info my-4'>
                No Data Found
              </div>
            }
        </div>
      </div>
    </div>
  )
}

export default API
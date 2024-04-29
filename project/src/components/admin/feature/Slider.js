import React, {useRef, useState, useEffect} from 'react'
import axios from 'axios'
import {API_URL, API_PATH} from '../../../util/API_URL';


const Slider = () => {

    let file = useRef();
    let [allImage, setAllImage] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/slider`).then(response=>{
            setAllImage(response.data);
        })
    },[])

    let upload = ()=>{
        let image = file.current.files[0];
        let form = new FormData();
        form.append("image", image);
        axios.post(`${API_URL}/slider`, form).then(response=>{
            // console.log(response.data);
            setAllImage([...allImage, response.data]);
        })
    }

    let update = (item, event)=>{
        // console.log(event.target.checked)
        let obj = { status : event.target.checked == true  ? 1 : 0};


        axios.put(`${API_URL}/slider/${item._id}`, obj).then(response=>{
            console.log(response.data);
        })            
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h3>Manage Your Slider Here</h3>
                <div className='col-md-6 offset-md-3 border border-1 p-3'>
                    <label>Upload Slider Image</label>
                    <input ref={file} type='file' className='form-control'/>
                    <br />
                    <button type='button' onClick={upload} className='btn btn-success'>Upload</button>
                </div>
                <div className='col-md-12'>
                    <table className='table table-dark'>
                        <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Show</th>
                            <th>Image</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                allImage.map((item, index)=>{
                                    return(
                                        <tr key={item._id}>

                                        <td>{index+1}</td>
                                        <td><input onChange={(event)=>update(item, event)} defaultChecked={item.status==1 ? true : false} type='checkbox' /></td>
                                        <td><img src={`${API_PATH}/slider/${item.name}`} style={{height :"80px", width : "80px"}}/></td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider
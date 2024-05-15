import React, {useRef, useState, useEffect} from 'react'
import axios from 'axios'
import API_URL from '../../util/API_URL'

const MyAlbum = () => {
  let file = useRef();

  let API_PATH = "http://localhost:8080"

  let [allPhotos, setAllPhotos] = useState([]);
  useEffect(()=>{
    axios.get(`${API_URL}/album`, {
      headers : {
        Authorization : localStorage.getItem("access-token")
      }
    }).then(response=>{
      setAllPhotos(response.data);
    })
  },[])


  let upload = async()=>{
    let myform = new FormData();
    myform.append("photo", file.current.files[0]);
    let response =await axios.post(`${API_URL}/album`, myform, {
      headers : {
         Authorization : localStorage.getItem("access-token")
      }
    })

    setAllPhotos([...allPhotos, response.data])
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
          <h3>Your Photos</h3>
          <label>Select Photo</label>
          <input type='file' ref={file} className='form-control' />
          <br />
          <button onClick={upload} className='btn btn-success'>Upload</button>
          <br />
          <div className='row'>
          {
              allPhotos.map(item=>{
                return(
                  <div key={item._id} className='col-md-2'>
                    <div className='card m-2 p-2'>
                      
                    <img src={`${API_PATH}/user-album/${item.image}`} className='card-img-top' style={{height : "150px"}}/>
                    </div>
                  </div>
                )
              })
          }
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default MyAlbum
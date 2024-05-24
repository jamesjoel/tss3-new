import React, {useRef} from 'react'
import axios from 'axios'

const App2 = () => {

    let file = useRef();

    let upload = ()=>{
        let myform = new FormData();
        myform.append("file", file.current.files[0]);
        axios.post("http://localhost:8080/upload", myform).then(response=>{
            console.log(response.data);
        })
    }
  return (
    <>
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Excel File Upload</h1>
                    <input type='file' ref={file} />
                    <button onClick={upload} className='btn btn-info'>Upload</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default App2
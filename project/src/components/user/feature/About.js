import React, {useState} from 'react'
import Slider from '../shared/Slider'
import axios from 'axios'

const About = () => {

  let [stu, setStu] = useState({ name : "", fee : "", subject : "" });

  // let [name, setName] = useState("");
  // let [age, setAge] = useState("");
  // let [salary, setSalary] = useState("");

  let demo = ()=>{
    console.log(stu)
    // let obj = { name : name, age : age, salary : salary };
    axios.post("http://localhost:8080/api/demo", stu).then(response=>{
      console.log(response.data);
    })
  }

  return (
    <>
    <Slider />
    <div className="container" style={{marginTop : "100px", minHeight : "600px"}}>
        <div className="row">
            <div className='col-md-12'>
            <h2>About Page</h2>
            <input type='text' onChange={(event)=>setStu({ ...stu, name : event.target.value })} className='form-control' />
            <br />
            <input type='text' onChange={(event)=>setStu({ ...stu, fee : event.target.value })} className='form-control' />
            <br />
            <input type='text'  onChange={(event)=>setStu({ ...stu, subject : event.target.value })} className='form-control' />
            <br />
            {/* <input type='text' onChange={(event)=>setName(event.target.value)} className='form-control'/>
            <br />
            <input type='text' onChange={(event)=>setAge(event.target.value)} className='form-control'/>
            <br />
            <input type='text' onChange={(event)=>setSalary(event.target.value)} className='form-control'/> */}
            <button onClick={demo} className='btn btn-info'>OK</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
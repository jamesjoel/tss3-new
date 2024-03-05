import React, {useState} from 'react'

const Event4 = () => {

    let [type, setType] = useState("password")

    let demo = ()=>{
        console.log("*******");
    }

    let change = ()=>{
        if(type=="password")
        {
            setType("text");
        }else{
            setType("password");
        }
    }

  return (
    <div className="container my-4 bg-secondary" style={{minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-12">
                <form onSubmit={()=>console.log("#####")}>

                Male <input onChange={demo} type='radio' name='gender' value="male" />
                Female <input type='radio' name='gender' value="female" />
                <br />
                <br />
                <button type='submit'>OK</button>
                </form>
                <br />
                
            </div>
            <div className='col-md-6'>
                <div className='input-group'>
                    <input type={type} placeholder='Type Your Password' className='form-control' />
                    
                        <button onClick={change} className='btn btn-dark'>
                            {
                                type=="password" 
                                ? 
                                <i class="fa fa-eye" aria-hidden="true"></i>
                                :
                                <i class="fa fa-eye-slash" aria-hidden="true"></i>
                            }
                            
                            {/*  */}
                        </button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Event4
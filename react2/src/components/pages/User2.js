import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sendMsg } from '../../redux/ChatSlice';

const User2 = () => {

    let allMsg = useSelector(state=>state)


    let dispatch = useDispatch();
    let [msg, setMsg] = useState("");

    let send = ()=>{
        let obj = { userid : "user2", msg : msg }
        dispatch(sendMsg(obj));
        setMsg("");
    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-8 offset-md-2 my-2">
                <div className="card">
                    <div className="card-header">
                        <h4>Chat Window for User2</h4>
                    </div>
                    <div className="card-body" style={{minHeight : "400px", position: "relative"}}>
                    <div style={{ position: "absolute", bottom: "10px",  width: "95%"}}>
                            {
                                allMsg.map((item, index)=>{
                                    return(
                                        <p key={index} style={{ textAlign : item.userid=="user2" ? "right" : "left", margin : "0"}}>
                                                <span style={{backgroundColor : item.userid == "user2" ? "#5B86C5" : "#9AC55B"}}>{item.msg}</span>
                                        </p>        
                                    )
                                })
                            }
                            
                            
                        </div>
                    </div>
                    <div className="card-footer">
                        <textarea value={msg} onChange={(event)=>setMsg(event.target.value)} placeholder='Type Your Message Here' className='form-control'></textarea>
                        <div className='d-grid'>
                        <button onClick={send} className='btn btn-sm btn-info mt-1'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default User2
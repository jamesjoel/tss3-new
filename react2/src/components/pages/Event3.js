import React, {useState} from 'react'

const Event3 = () => {

    let [c1, setC1] = useState("white");
    let [c2, setC2] = useState("white");
    let [c3, setC3] = useState("white");
    let [w, setW] = useState(200)

    let [num, setNum] = useState(0)

    let demo = (event)=>{
        console.log(event);
        event.preventDefault();
    }

    let demo2 = (event)=>{
        // console.log(event.which);
        // if(event.which == "65")
        // {
        //     event.preventDefault();
        // }

        let a = event.target.value;
        
        // if(a.length>=10){
        //     event.preventDefault();
        // }
    }

    let demo3 = ()=>{
        console.log("******");
    }

    let inc = ()=>{
        setNum((x)=>{
            let y = ++x;
            return y;
        })
    }
    let dec = ()=>{
        setNum((x)=>{
            let y = --x;
            return y;
        })
    }

    let demo4 = (event)=>{
        if(event.target.value.length > 10){
            setW((x)=>{
                let y = w+5;
                return y;
            })
        }
    }

  return (
    <div onContextMenu={(event)=>demo(event)} className="container my-5 bg-info" style={{minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-12">
                <button onClick={inc}  className='btn btn-dark mx-3'>+</button>
                {num}
                <button onClick={dec} className='btn btn-dark mx-3'>-</button>
                <br />
                <br />
                <a onClick={(event)=>demo(event)} href='http://google.com'>Google</a>
                <br />
                <br />
                <input type='text' onCopy={(event)=>demo(event)}  onPaste={(event)=>demo(event)}/>
                <br />
                <br />
                <textarea onKeyUp={demo3} onKeyDown={(event)=>demo2(event)}></textarea>
                <br />
                <br />
                <br />
                <input onFocus={()=>setC1("red")} onBlur={()=>setC1("blue")} type='text' style={{backgroundColor : c1}}/>
                <br />
                <br />
                <input onFocus={()=>setC2("red")} onBlur={()=>setC2("blue")} type='text' style={{backgroundColor : c2}}/>
                <br />
                <br />
                <input onKeyDown={(event)=>demo4(event)} onFocus={()=>setC3("red")} onBlur={()=>setC3("blue")} type='text' style={{backgroundColor : c3, width : w+"px"}}/>
            </div>
        </div>
    </div>
  )
}

export default Event3
// james abc abc
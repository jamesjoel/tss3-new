import React, {useState} from 'react'

const About3 = () => {
  let data= [
    {
      id : 1,
      name : "sony",
      price : 25000
    },
    {
      id : 2,
      name : "i-phone",
      price : 33000
    },
    {
      id : 3,
      name : "Lg Mobile",
      price : 22000
    },
    {
      id : 4,
      name : "samsung",
      price : 55000
    },
    {
      id : 5,
      name : "Iphone-x",
      price : 17000
    }
  ]

  let [allData, setAllData] = useState(data);
  

  let sortByNameAtoZ = ()=>{
    let newarr = [...allData].sort((a, b)=>{
      return a.name > b.name;
    })
   
    setAllData(newarr)
  }

  let sortByPriceMintoMax = ()=>{
    
    let newarr = [...allData].sort((a, b)=>{
      return a.price - b.price;
    })
   
    setAllData(newarr)
  }


  let sortByPriceMaxtoMin = ()=>{
    
    let newarr = [...allData].sort((a, b)=>{
      return b.price - a.price;
    })
   
    setAllData(newarr)
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-12">
          <button onClick={sortByNameAtoZ} className='btn btn-info m-2'>Sort by Name (A-Z)</button>
          <button className='btn btn-info m-2'>Sort by Name (Z-A)</button>
          <button  onClick={sortByPriceMintoMax} className='btn btn-info m-2'>Sort by Price (Min-Max)</button>
          <button onClick={sortByPriceMaxtoMin} className='btn btn-info m-2'>Sort by Price (Max-Min)</button>
          
          
          <table className="table table-dark mt-2">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
                {
                  allData.map((value, index)=>{
                    return(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{value.name}</td>
                        <td>{value.price}</td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default About3;
/*
  [{}, {}, "blue"]
*/
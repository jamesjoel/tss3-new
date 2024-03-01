let About = ()=>{
    let user = [
        {
             id : 1,
             name : "rohit",
             age : 25
        },
        {
             id : 2,
             name : "vijay",
             age : 22
        },
        {
             id : 3,
             name : "gaurav",
             age : 23
        },
        {
             id : 4,
             name : "amar",
             age : 20
        },
        {
             id : 5,
             name : "jaya",
             age : 21
        },
        {
             id : 6,
             name : "ajay",
             age : 20
        }
    ]


    return(
        <>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // listing
                                    user.map((value, index)=>{
                                        return(
                                            // <Box />
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{value.name}</td>
                                                <td>{value.age}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
import AllRoutes from "./allRoutes/AllRoutes";
import Header from "./components/shared/Header";



let App = ()=>{
    return(
        <>
            <Header />
            <div className="container">
                <AllRoutes />
            </div>
            
        </>
    )
}

export default App;
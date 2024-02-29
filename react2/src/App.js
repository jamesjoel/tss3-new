import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Header from "./components/shared/Header";

import { Routes, Route } from 'react-router-dom'

let App = ()=>{
    return(
        <>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>
            
        </>
    )
}

export default App;
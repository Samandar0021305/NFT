import "./wrapper.css";

import Header from "../header/Header";
import Navbar from "../navbar/Navbar";



function Wrapper(){
    return(
        <div className="wrapper">
        <Navbar />
        <Header />
        </div>
    )
}

export default Wrapper;
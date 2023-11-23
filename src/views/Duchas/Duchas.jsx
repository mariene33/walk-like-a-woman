import React, { useState } from "react";
import "./Duchas.css";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Footer from "../../components/molecules/Footer/Footer";


function Duchas () {

 return (
    <section>
        <Navbar></Navbar>
       
           <h1 className="duchas">DUCHAS</h1>
           <h2 className="duchas-text"></h2>

        <Footer></Footer>
    </section>
 )
}

export default Duchas;
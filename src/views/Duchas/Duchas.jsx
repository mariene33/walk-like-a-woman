import React, { useState } from "react";
import "./Duchas.css";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Footer from "../../components/molecules/Footer/Footer";


function Duchas () {

 return (
    <section>
        <Navbar></Navbar>
         <section className="duchas">
           <h1 className="duchas-tittle">DUCHAS</h1>
           <h2 className="duchas-text-tittle"></h2>
           <div className="duchas-text">DÓNDE
        Lorem ipsum dolor sit amet.
        </div>
        <div className="duchas-text">CON QUÉ
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </div>
        <div className="duchas-text">PRODUCTOS
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="duchas-text">PRODUCTOS
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
         </section>
        <Footer></Footer>
    </section>
 )
}

export default Duchas;
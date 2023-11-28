import React, { useState } from "react";
import "./Ropa.css";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Footer from "../../components/molecules/Footer/Footer";
import CardInit from "../../components/atoms/CardInit/CardInit";



function Ropa() {
   

    return (
      <section id="ropa-container">
        <Navbar></Navbar>
        <span>
            
            <b className="text-ropa">¿QUÉ ROPA ME LLEVO?</b>
            
        </span>
        <div id="ropa-cards-container">
       
          <CardInit title={"otoño/invierno"} link={"autom-invierno"}></CardInit>
          
          <CardInit title={"primavera/verano"} link={"primavera-verano"}></CardInit>
          
        </div>
        <Footer></Footer>
      </section>


    );
  }



export default Ropa;
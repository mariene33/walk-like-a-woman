import React, { useState } from "react";
import "./HigieneFemenina.css";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Footer from "../../components/molecules/Footer/Footer";
import CardInit from "../../components/atoms/CardInit/CardInit";


function HigieneFemenina() {
   
    return (
      <section id="higiene-femenina-container">
        <Navbar></Navbar>
        
        <div id="higiene-femenina-cards-container">
       
          <CardInit title={"DUCHAS"} link={"duchas"}></CardInit>
          
          <CardInit title={"LA REGLA"} link={"la-regla"}></CardInit>

          <CardInit title={"CABELLO"} link={"cabello"}></CardInit>

          <CardInit title={"QUE ME LLEVO"} link={"quemellevo"}></CardInit>
          
        </div>
        <Footer></Footer>
      </section>


    );
  }

export default HigieneFemenina;
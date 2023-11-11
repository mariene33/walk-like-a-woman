import React, { useState } from "react";
import "./DondeDormir.css";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Footer from "../../components/molecules/Footer/Footer";
import CardInit from "../../components/atoms/CardInit/CardInit";



function DondeDormir() {
   

    return (
      <section id="donde-dormir-container">
        <Navbar></Navbar>
        
        <div id="donde-dormir-cards-container">
       
          <CardInit title={"ACAMPANDO ANDO"} link={"acampando-ando"}></CardInit>
          
          <CardInit title={"PLATAFORMAS"} link={"plataformas"}></CardInit>
          
        </div>
        <Footer></Footer>
      </section>


    );
  }



export default DondeDormir;
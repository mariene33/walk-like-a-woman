import React, { useState } from "react";
import "./Aventurate.css";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Footer from "../../components/molecules/Footer/Footer";
import CardSelect from "../../components/atoms/CardSelect/CardSelect";


function VistaAventurate() {
    const tipsOptions = [
        {
            description: "DÓNDE DORMIR",
            link: "donde-dormir"
        },
        {
            description: "HIGIENE FEMENINA",
            link: "higiene-femenina"
        },
        {
            description: "CUIDA DE TI MISMA",
            link: "cuida-de-ti-misma"
        },
        {
            description: "QUÉ COMER",
            link: "que-comer"
        }
    ];
    return (

        <section id="aventurate-container">
        
        <Navbar></Navbar>

            <h1 id="aventurate-title">AVENTÚRATE</h1>
          
            <div id="cards-container">
       

            <CardSelect title={"AVENTÚRATE"} defaultOption="TIPS" options={tipsOptions}></CardSelect>
           </div>
          
       
        <Footer></Footer>
        
        </section>
    );
  }
  
  export default VistaAventurate;
import React, { useState } from "react";
import "./Inspirate.css";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Footer from "../../components/molecules/Footer/Footer";
import CardInit from "../../components/atoms/CardInit/CardInit";



function Inspirate() {
   

    return (
      <section id="inspirate-container">
        <Navbar></Navbar>
        <span>
            
            <b className="text-inspirate">MUJERES 
            INSPIRADORAS</b>
            
        </span>
        <div id="inspirate-cards-container">
       
          <CardInit title={"blogs"} link={"blogs"}></CardInit>
          
          <CardInit title={"en la cultura"} link={"en-la-cultura"}></CardInit>
          
          <CardInit title={"redes sociales"} link={"redes-sociales"}></CardInit>
          
        </div>
        <Footer></Footer>
      </section>


    );
  }



export default Inspirate;
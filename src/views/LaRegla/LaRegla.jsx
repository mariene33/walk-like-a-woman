import React, { useState } from "react";
import "./LaRegla.css";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Footer from "../../components/molecules/Footer/Footer";

function LaRegla () {

    return (
        <div className="la-regla-section">
            <Navbar></Navbar>
            <section className="la-regla">
            <h1 className="la-regla-tittle">LA REGLA ...</h1>
            <div className="la-regla-text">CÓMO SE  SOBREVIVE A UN VIAJE DE 
    AVENTURA CON LA REGLA....
    PUES SE HACE. 
    NO ESTAN GRAVE, NI ES UNO DE
    NUESTROS
    MAYORES PROBLEMAS NI MUCHO
    MENOS.
    Todo esto sera informacion acerce
    de qué métodos son mejores para qcuando viajas. 
    sus pros y contras, y como te las apañas, cuando tienes que  cambiarte en sitios extremos.
    AVENTURA CON LA REGLA....
    PUES SE HACE. 
    NO ESTAN GRAVE, NI ES UNO DE
    NUESTROS
    MAYORES PROBLEMAS NI MUCHO
    MENOS.
    Todo esto sera informacion acerce
    de qué métodos son mejores para qcuando viajas. 
    sus pros y contras, y como te las apañas, cuando tienes que  cambiarte en sitios extremos.
            
            </div>
            </section>
        
            <Footer></Footer>
        
        </div>

    ) 

}

export default LaRegla;
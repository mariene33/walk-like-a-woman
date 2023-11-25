import React, { useState } from "react";
import "./QueMeLlevo.css";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Footer from "../../components/molecules/Footer/Footer";


function QueMeLlevo () {

    return (
        <div className="que-me-llevo-section">
            <Navbar></Navbar>
            <section className="que-me-llevo">
            <h1 className="que-me-llevo-tittle">QUÉ ME LLEVO</h1>
            <div className="que-me-llevo-text">
            
    
-Champú en pastilla (te sirve de gel también) 
Recuerda que ha de ser responsabble con el medio.ambiente.
<br></br>
-Un frasco pequeñito con un poco de crema hidratante.
<br></br>
-Crema solar
<br></br>
-Copa menstrual, o bragitas menstruales
<br></br>
-Cortauñas
<br></br>
-Sobres de mascarilla 
<br></br>
-Cepillo y pasta de dientes (la pasta de dientes que sea lo mas natural posible), ya que nos tocará lavarnos los dientes en cualquier lado. Y el CEPILLO de mango corto.
<br></br>
-Paquete de pañuelos de papel



            
            </div>
            </section>
        
            <Footer></Footer>
        
        </div>

    ) 

}

export default QueMeLlevo;
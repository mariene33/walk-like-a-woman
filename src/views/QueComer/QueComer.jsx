import React, { useState } from "react";
import "./QueComer.css";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Footer from "../../components/molecules/Footer/Footer";

function QueComer () {
    return (
        <div className="que-comer-section">
            <Navbar></Navbar>
            <section className="que-comer">
            <h1 className="que-comer-tittle">QUÉ COMER</h1>
            <div className="que-comer-text">
            
            En viajes en los que el motor principal es tu cuerpo,la alimentación se convierte en algo clave para e léxito de tu aventura.

HIDRATACIÓN: no puedes quedarte sin agua. lleva siempre un litro de repuesto. Si es gua con un limos expreimido... pues mucho mejor.
GRASAS SALUDABLES: aguacate, nueces, quesos...
MUCHA FRUTA Y VERDURA CRUDA: efectivamnete, la fruta y verdura cruda son una fuente de vitaminas, que lo agradeceras en las semanas que dure tu viaje. 
LATAS DE CONSERVAS : comer legumbres enlatadas, o lo que te ofrezca el supermercado de cada país,  es una buena opción. te vienen preparadas, y es un motor importante... si es cierto que lo tendras que comer frio, pero para supervivientes como nosotras... no es nada.
 FRUTOS ROJOS, Y CHOCOLATE NEGRO: 
y serás invencible

            
            </div>
            </section>
        
            <Footer></Footer>
        
        </div>

    ) 

}

export default QueComer;

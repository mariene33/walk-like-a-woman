import React, { useState } from "react";
import "./Acampada.css";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Footer from "../../components/molecules/Footer/Footer";

function Acampada () {
    return (
        <div className="acampada-section">
            <Navbar></Navbar>
            <section className="acampada">
            <h1 className="acampada-tittle">¿Que Necesito Para Acampar?</h1>
            <div className="acampada-text">

            
<b>TIENDA DE CAMPAÑA:</b>
<br></br>
<br></br>
depende de la aventura pero mi recomen-
dación es levar contigo una de 4 
estaciones y lo mas ligera posible.

<br></br>
<br></br>

<b>SACO DE DORMIR: </b>
<br></br>
<br></br>
Uno gordito pero ligero. Los sacos sá-
bana solo sirven si quieres hacer travesias
cortas y en verano, entonces; si ese no 
es tu caso... apuesta por un buen saco
de dormir ( con su funda incluida) .

<br></br>
<br></br>

<b>ESTERILLA O COLCHONETA:</b> 
<br></br>
<br></br>
La esterila Huevera de decathlon es de
lo mejor que podeis llevar con vosotros 
para dormir, senterte, o apoyar cosas.
si en cambiio necesitas una structura
mas acolchada, recomiendo los cochones 
hinchables de summit. Son caros, pero
os duraran el tiempo que querais, además
de creer que estais durmendo en una 
cómoda cama de hotel.

<br></br>
<br></br>

<b>FRONTAL:</b>
<br></br>
<br></br>
Tu mejor amigo dentro de la tienda. Dos
o tres son mejor que uno. sobre todo por 
seguridad y precaución. 
Intenta llevar dos luces frontales cargadas
 y después una luz manua de dinamo,
por si algún día te fallaran o 
agotaran las baterias.
<br></br><br></br>


            
            </div>
            </section>
        
            <Footer></Footer>
        
        </div>

    ) 

}

export default Acampada;

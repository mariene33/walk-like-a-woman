import React, { useState } from "react";
import "./Cabello.css";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Footer from "../../components/molecules/Footer/Footer";


function Cabello () {

    return (
        <div className="cabello-section">
            <Navbar></Navbar>
            <section className="cabello">
            <h1 className="cabello-tittle">CABELLO</h1>
            <div className="cabello-text">
            Los problemas con el pelo cuando viajamos de una forma alternativa son mucho y muy compejos.
para las rizosas salvajes es muy dificil mantener el orden dentro de los bucles, y  y para las que no, 
es complicado parecer que se han lavado la cabeza en los últimos dia.
para eso recomiendo que en un viaje en el que tiene que caberte todo dentro de una mochila, eves y pruebes antes u tu champú pero llevalo en pastilla. cuanto menos 
pedo y mas pequeño, mejor. has de buscar una alternativa para la hidratación. 
in tenta llevarte sobres pequeñitos de mascarila o acondicionador. 
desde luego está prohibido no hidratarse el cabello en los meses que estes de viaje, te arrepentiras cuando acabes, ya que será una gran bola seca 
y desaliñada que tendrás que rapar.

los productos que eijas han de ser respetuosos con el medio ambiente, po, y la principa razón es porque muchas veces tendras que bañarte, en rios, p en caudales naturales, y nosotras
estamos de paso para mejorar lo que nos encontremos, no para intoxicar un ecosistema con químicos. 

Cuidad dónde colocais la cabeza. 
Sí dormis en hostales, hostels, o en casas de personas intentad no dormir sobre la fun de almohada de otros, los piojos estan por todas partes, y es un rollo que te toque en un viaje, a saber en que país, y ademas caminando o viajando en bicicleta.

es mejor desenredarse el pelo con los deddos de la mano. No utiliceis e cepillo de otras personas, y no cargeis con un cepillo propio, ya que es peso innecesario.
si llevais una girra que lo proteja del sol, os lo agradecereis después del viaje, no os imaginais los destrozos que hace el sol a largdía tras día callendo sobre vuestra cabeza. 
 Y si seguis estos consejos, no tendreis un pelo “pantene” al terminar esta aventura, pero si que no tendreis que raparlo al cero por obligación cuando acabe.
    
            
            </div>
            </section>
        
            <Footer></Footer>
        
        </div>

    ) 

}

export default Cabello;
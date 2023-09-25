import React, { useState } from 'react';
import './Inicio.css'
import Navbar from '../../components/molecules/Navbar/Navbar';
import CardInit from '../../components/atoms/CardInit/CardInit';
import BackButton from '../../components/atoms/BackButton/BackButton';
import Footer from '../../components/molecules/Footer/Footer';




function VistaInicio() {
     
    return ( 
        <div>


        <Navbar></Navbar>
        
         <section className='fondo'>
         
         <div>
       
        <tittle className="bienvenida">BIENVEVIDA A TU AVENTURA</tittle>
          <br></br>
        <div className="card-group-inicio">
        <CardInit></CardInit> 
          <br></br>
        <CardInit></CardInit> 
          <br></br>

        <CardInit></CardInit> 
          <br></br>
        </div>      
        </div>   
        <br></br> 
    
        </section>  
        <div>
        <BackButton></BackButton>
        </div>
        <Footer></Footer>
        </div>
    )
   

}



export default VistaInicio




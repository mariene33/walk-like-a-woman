import React, { useState } from "react";
import "./Inicio.css";
import Navbar from "../../components/molecules/Navbar/Navbar";
import CardInit from "../../components/atoms/CardInit/CardInit";
import Footer from "../../components/molecules/Footer/Footer";

function VistaAventurate() {
  return (
    <section id="aventurate-container">
      <Navbar></Navbar>
      <h2>BIENVENIDA A TU AVENTURA</h2>
      <div id="cards-container">
        <CardInit title={"AVENTÚRATE"} link={"aventurate"}></CardInit>
        <CardInit title={"INSPÍRATE"} link={"inspirate"}></CardInit>
        <CardInit title={"MI VUELTA AL MUNDO"} link={"vuelta-mundo"}></CardInit>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default VistaAventurate;

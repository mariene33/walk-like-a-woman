import React, { useState } from "react";
import "./Aventurate.css";
import Navbar from "../../components/molecules/Navbar/Navbar";
import CardInit from "../../components/atoms/CardInit/CardInit";
import BackButton from "../../components/atoms/BackButton/BackButton";
import Footer from "../../components/molecules/Footer/Footer";

function VistaAventurate() {
  return (
    <section>
      <div>
        <Navbar></Navbar>
      </div>

      <CardInit></CardInit>

      <div>
        <Footer></Footer>
      </div>
    </section>
  );
}

export default VistaAventurate;

// // import React, { useState } from "react";
// // import "./Plataformas.css";
// // import Navbar from "../../components/molecules/Navbar/Navbar";
// // import Footer from "../../components/molecules/Footer/Footer";

// // function Plataformas() {
// //   const Desplegable = ({ titulo, contenido }) => {
// //     const [infoDesplegada, setInfoDesplegada] = useState(false);

// //     const toggleInfo = () => {
// //       setInfoDesplegada(!infoDesplegada);
// //     };

// //     return (
// //       <div>
// //         <h2 className="plataformas-options" onClick={toggleInfo}>
// //           {titulo}
// //         </h2>
// //         {infoDesplegada && (
// //           <div>
// //             <p className="plataformas-info">{contenido}</p>
// //           </div>
// //         )}
// //         <br></br>
// //       </div>
// //     );
// //   };

// //   return (
// //     <section id="plataformas-container">
// //       <Navbar></Navbar>

// //       <h1 id="plataformas">PLATAFORMAS</h1>

// //       <div id="plataformas-options-container">
// //         <Desplegable titulo="NOMADSISTER" contenido="NomadSister es una comunidad de mujeres impulsadas por dos pasiones comunes: conocer gente y viajar. Durante el tiempo de una etapa, las viajeras son recibidas gratuitamente en casas de anfitrionas." />
// //         <Desplegable titulo="COUCHSURFING" contenido="Couchsurfing es una plataforma que conecta a viajeros con anfitriones locales que ofrecen alojamiento gratuito." />
// //         <Desplegable titulo="BE WELCOME" contenido="BeWelcome es una red social que conecta a viajeros con anfitriones locales dispuestos a ofrecer alojamiento gratuito." />
// //         <Desplegable titulo="AIRBNB" contenido="Airbnb es una plataforma de alojamiento que permite a las personas alquilar su propiedad o habitación a viajeros." />
// //       </div>

// //       <Footer></Footer>
// //     </section>
// //   );
// // }

// export default Plataformas;

import React, { useState } from "react";
import "./Plataformas.css";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Footer from "../../components/molecules/Footer/Footer";

function Plataformas() {
  const Desplegable = ({ titulo, contenido, enlace }) => {
    const [infoDesplegada, setInfoDesplegada] = useState(false);

    const toggleInfo = () => {
      setInfoDesplegada(!infoDesplegada);
    };

    return (
      <div>
        <h2 className="plataformas-options" onClick={toggleInfo}>
          {titulo}
        </h2>
        {infoDesplegada && (
          <div>
            <p className="plataformas-info">
              {contenido} <a href={enlace} target="_blank" rel="noopener noreferrer">echa un vistazo</a>
            </p>
          </div>
        )}
        <br></br>
      </div>
    );
  };

  return (
    <section id="plataformas-container">
      <Navbar></Navbar>

      <h1 id="plataformas">PLATAFORMAS</h1>

      <div id="plataformas-options-container">
        <Desplegable
          titulo="NOMADSISTER"
          contenido="NomadSister es una comunidad de mujeres impulsadas por dos pasiones comunes: conocer gente y viajar. Durante el tiempo de una etapa, las viajeras son recibidas gratuitamente en casas de anfitrionas."
          enlace="https://www.nomadsister.com/es/blog/articles/por-que-crear-un-couchsurfing-seguro-para-las-mujeres"
        />
        <Desplegable
          titulo="COUCHSURFING"
          contenido="Couchsurfing es una plataforma que conecta a viajeros con anfitriones locales que ofrecen alojamiento gratuito."
          enlace="https://www.couchsurfing.com/"
        />
        <Desplegable
          titulo="BE WELCOME"
          contenido="BeWelcome es una red social que conecta a viajeros con anfitriones locales dispuestos a ofrecer alojamiento gratuito."
          enlace="https://www.bewelcome.org/?gclid=Cj0KCQiA6vaqBhCbARIsACF9M6nR3wcDHVnbngukJIL-NuCGs9SbgBT1565FnNMaIPMLIEbwXfOzazsaAtwOEALw_wcB"
        />
        <Desplegable
          titulo="AIRBNB"
          contenido="Airbnb es una plataforma de alojamiento que permite a las personas alquilar su propiedad o habitación a viajeros."
          enlace="https://www.airbnb.es/?&c=.pi0.pk65010786_2387395626&ghost=true&gad_source=1&gclid=Cj0KCQiA6vaqBhCbARIsACF9M6nYcfcEjjEOpeh4djJrtKIJfs9sfvgo9O0K2mBKTMa9Q9DiYXG0HqAaArqPEALw_wcB&gclsrc=aw.ds"
        />
      </div>

      <Footer></Footer>
    </section>
  );
}

export default Plataformas;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../views/Login/Login";
import Profile from "../views/Profile/Profile";
import Inicio from "../views/Inicio/Inicio";
import Aventurate from "../views/Aventurate/Aventurate";
import DondeDormir from "../views/DondeDormir/DondeDormir";
import AcampandoAndo from "../views/AcampandoAndo/AcampandoAndo";
import Plataformas from "../views/Plataformas/Plataformas";
import HigieneFemenina from "../views/HigieneFemenina/HigieneFemenina";
import Duchas from "../views/Duchas/Duchas";
import LaRegla from "../views/LaRegla/LaRegla";
import Cabello from "../views/Cabello/Cabello";
import QueMeLlevo from "../views/QueMeLlevo/QueMeLlevo";
import CuidaDeTiMisma from "../views/CuidaDeTiMisma/CuidaDeTiMisma";
import QueComer from "../views/QueComer/QueComer";
import Acampada from "../views/Acampada/Acampada";
import Ropa from "../views/Ropa/Ropa"
import AutomInvierno from "../views/AutomInvierno/AutomInvierno"
import PrimaveraVerano from "../views/PrimaveraVerano/PrimaveraVerano"
import Accesorios from "../views/Accesorios/Accesorios"
import Inspirate from "../views/Inspirate/Inspirate"
import Blog from "../views/Blogs/Blogs"



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/inicio" element={<Inicio />}></Route>
        <Route path="/aventurate" element={<Aventurate />}></Route>
        <Route path="/donde-dormir" element={<DondeDormir />}></Route>
        <Route path="/acampando-ando" element={<AcampandoAndo />}></Route>
        <Route path="/plataformas" element={<Plataformas />}></Route>
        <Route path="/higiene-femenina" element={<HigieneFemenina />}></Route>
        <Route path="/duchas" element={<Duchas />}></Route>
        <Route path="/la-regla" element={<LaRegla />}></Route>
        <Route path="/cabello" element={<Cabello />}></Route>
        <Route path="/que-me-llevo" element={<QueMeLlevo />}></Route>
        <Route path="/cuida-de-ti-misma" element={<CuidaDeTiMisma />}></Route>
        <Route path="/que-comer" element={<QueComer />}></Route>
        <Route path="/acampada" element={<Acampada />}></Route>
        <Route path="/ropa" element={<Ropa />}></Route>
        <Route path="/autom-invierno" element={<AutomInvierno />}></Route>
        <Route path="/primavera-verano" element={<PrimaveraVerano />}></Route>
        <Route path="/accesorios" element={<Accesorios />}></Route>
        <Route path="/inspirate" element={<Inspirate />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default Router;

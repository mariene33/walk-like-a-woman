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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

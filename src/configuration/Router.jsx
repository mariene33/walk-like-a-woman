import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../views/Login/Login";
import Profile from "../views/Profile/Profile";
import Inicio from "../views/Inicio/Inicio";
import Aventurate from "../views/Aventurate/Aventurate";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/inicio" element={<Inicio />}></Route>
        <Route path="/aventurate"element={<Aventurate />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

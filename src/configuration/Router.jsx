import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../views/Login/Login";
import Profile from "../views/Profile/Profile";
import Inicio from "../views/Inicio/Inicio"

const Router= () => {
    return(
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element= {<Login/>}></Route>
                <Route path= '/Profile' element= {<Profile/>}></Route>
                <Route path= '/Profile/Inicio' element= {<Inicio/>}></Route>
               
            </Routes>
        </BrowserRouter>
    );
};

export default Router
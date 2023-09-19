import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../views/Login/Login";
import Profile from "../views/Profile/Profile";
//import Acces from "../views/Acces/Acces";
//import RPconsultas from "../views/RPconsultas/RPconsultas";

//importo paginas

//import Description from "../components/pages/Description"

/*<Route path='/features' element= {<Features/>}></Route>

                
                <Route path='/extra' element= {<Extra/>}></Route>*/

const Router= () => {
    return(
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element= {<Login/>}></Route>
                <Route path= '/Profile' element= {<Profile/>}></Route>
                {/* <Route path='/Acces' element= {<Acces/>}></Route> */}
                {/* <Route path='/Acces/RPconsultas' element= {<RPconsultas/>}></Route> */}
                
                {/* <Route path='/screens' element= {<Screens/>}></Route> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router
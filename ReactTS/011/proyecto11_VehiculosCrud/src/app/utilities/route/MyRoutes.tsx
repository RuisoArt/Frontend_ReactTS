import {Route, Routes} from "react-router-dom";
import { Catalogue } from "../../componets/Catalogue";
import { CreateCar } from "../../componets/CreateCar";
import { EditCars } from "../../componets/EditCars";
import { Welcome } from "../../componets/Welcome";



export const MyRoutes =()=>{
    return(
        <Routes>
            <Route path = "/" element={<Welcome/>}/>
            <Route path = "administrar" element={<EditCars/>}/>
            <Route path = "catalogo" element={<Catalogue/>}/>
            <Route path = "create" element={<CreateCar/>}/>
        </Routes>
    )
};
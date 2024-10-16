import { Route , Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { LibroCrear } from "../../componentes/libros/Librocrear";
import { LibroAdmin } from "../../componentes/libros/LibroAdmin";
import { LibroActualizar } from "../../componentes/libros/LibroActualizar";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = ()=>{
    return(
        <Routes>
            <Route path="/libcre" element={< Inicio/>}  />
            <Route path="/liblis"element={<LibroCrear/>} />
            <Route path="/libadm"element={<LibroAdmin/>} />
            <Route path="/libact/:codigo"element={<LibroActualizar/>} />
            <Route path="/acer" element={<Acerca/>} />
            <Route path="*" element={< NoEncontrado/>} />
        </Routes>
    );
};
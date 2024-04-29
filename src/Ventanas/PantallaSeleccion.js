import React from "react";
import {Link} from "react-router-dom";

function PantallaSeleccion(){
    return(
        <>
            <p>Selecciona pou</p>
            <Link to="/principal">
                <button>Confirmar seleccion</button>
            </Link>
        </>
    );
}
export default PantallaSeleccion;
import React from "react";
import {Link} from "react-router-dom";

function PantallaNombre(){
    return(
        <>
            <p>Introduce el nombre del pou:</p>
            <Link to="/seleccion">
                <button>Confirmar nombre</button>
            </Link>
        </>
    );
}
export default PantallaNombre;
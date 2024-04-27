import React from "react";
import {Link} from "react-router-dom";

function PantallaInicio(){
    return(
        <>
            <h1>PIXEL PALS</h1>
            <p>This is home page</p>
            <Link to="/seleccion">
                <button>Click para empezar</button>
            </Link>
            
        </>
    );
}
export default PantallaInicio;
import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Logo from "../images/logo.png";
import FondoInicio from "../images/FondoInicio.png";
import './fondoPantallaInicio.css';
var sectionStyle = {
    backgroundImage: FondoInicio
}

function PantallaInicio() {
    return (
        <div className="containerNombre d-flex flex-column justify-content-center align-items-center vh-100">
            <div className="titulo text-center">
                <img src={Logo} className="img-fluid" alt="Logo" />
                <h3 className="colorTextoHomepage"><strong></strong></h3>
            </div>
            <div> {/* Contenedor para el botón */}
                <Link to="/nombre">
                    <button className="botonDegradado">PULSA PARA COMENZAR</button>
                </Link>
            </div>
        </div>
    );
}

export default PantallaInicio;
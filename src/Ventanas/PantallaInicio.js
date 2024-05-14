import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Logo from "../images/logo.png";
import FondoInicio from "../images/FondoInicio.png";
import './fondoPantallaInicio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
var sectionStyle = {
    backgroundImage: FondoInicio
}

function PantallaInicio() {
    return (
        <>
            <div class="d-flex align-items-center flex-column  img-fluid pt-5 mt-5">
                <img src={Logo} width={650} height={175} alt="" />
                <h3 class="colorTextoHomepage"><strog></strog></h3>
            </div>




            <div className="d-flex justify-content-center align-items-center vh-100">
                <div > {/* Contenedor para el botón */}
                    <Link to="/nombre">
                        <button className="botonDegradado"> PULSA PARA COMENZAR</button>
                    </Link>
                </div>
            </div>



        </>
    );
}
export default PantallaInicio;
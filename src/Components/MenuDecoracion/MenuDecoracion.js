import React from 'react';
import Modal from 'react-modal';
import fondobasico2 from '../../images/fondo-images/fondobasico2.jpg';
import beeRoom from '../../images/fondo-images/beeRoom.jpg';
import cocina from '../../images/fondo-images/cocina.jpg';
import salon from '../../images/fondo-images/salon.jpg';
import cueva from '../../images/fondo-images/cueva.jpg';
import { useState } from "react";
import './MenuDecoracion.css';

const MenuDecoracion = ({ isOpen, onClose, children, img_func, imgActual}) => {

const[imageSelected, setImageSelected]=useState(imgActual);

const seleccionarImagen=(event)=>{
    setImageSelected(event.target.src);
};

    return (

       
        <Modal 
          
            className="modal-container-owo"
            overlayClassName="modal-overlay-owo"
            isOpen={isOpen}
            onRequestClose={onClose}>

            <div className="modal-content">
            {children}
            <h1>DECORACIÓN</h1>
            <table>
                <tr>
                    <td>
                        <div className='actual'>
                        <h2>Actual:</h2>
                        <img src={imgActual} alt="FondoActual" className="fondo-actual" />
                        </div>

                    </td>
                    <td>
                        <div className='seleccionada'>
                        <h2>Seleccionada:</h2>
                        <img src={imageSelected} alt="FondoActual" className="fondo-actual" />
                        </div>
                    </td>
                </tr>
            </table>
           
            
            <button onClick={()=>img_func(imageSelected)}>Cambiar</button>
            
            <h2>Disponibles:</h2>
            <ul>
                <li> <img onClick ={seleccionarImagen} src={cocina} alt="cocina" className="lista-fondos"/></li>
                <li><img onClick ={seleccionarImagen} src={salon} alt="salon" className="lista-fondos"/></li>
                <li><img onClick ={seleccionarImagen} src={cueva} alt="cueva" className="lista-fondos"/></li>
                <li><img onClick ={seleccionarImagen} src={beeRoom} alt="habitacion" className="lista-fondos"/></li>
                <li><img onClick ={seleccionarImagen} src={fondobasico2} alt="paisaje" className="lista-fondos"/></li>
            </ul>
            
            <button className='cerrar-owo' onClick={onClose}>X</button>
            </div>
        </Modal>
        
    );
};

export default MenuDecoracion;


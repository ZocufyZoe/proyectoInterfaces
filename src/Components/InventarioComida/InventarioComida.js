import React from 'react';
import Modal from 'react-modal';

import { useState } from "react";
import './InventarioComida.css';
import limon from '../../images/comida-images/limon.png';
import pera from '../../images/comida-images/pera.png';
import fresa from '../../images/comida-images/fresa.png';

const InventarioComida = ({ isOpen, onClose, children, seleccionarComida}) => {

    
    return (
    <Modal
      className="modal-container"
      overlayClassName="modal-overlay"
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <div className="modal-content">
        {children}
        <h3>Inventario</h3>
        <ul>
        <li> <img onClick ={seleccionarComida} src={limon} alt="limon" className="lista-comida"/></li>
        <li> <img onClick ={seleccionarComida} src={pera} alt="pera" className="lista-comida"/></li>
        <li> <img onClick ={seleccionarComida} src={fresa} alt="fresa" className="lista-comida"/></li>
        </ul>
        <button className='cerrar' onClick={onClose}>X</button>
      </div>
    </Modal>
    );
};

export default InventarioComida;
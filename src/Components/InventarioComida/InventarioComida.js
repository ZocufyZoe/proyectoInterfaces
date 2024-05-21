import React from 'react';
import Modal from 'react-modal';

import './InventarioComida.css';


const InventarioComida = ({ isOpen, onClose, children,
   seleccionarComida, arrayProductos}) => {


    /*
    <InventarioComida isOpen={isFoodInventoryOpen} 
            onClose={closeInventory}
            seleccionarComida={seleccionarFood} 
            showComida={setShowFood}
            arrayProductos={products}
            cambiarPuntos={setPuntosSelected}
            />*/ 


       
    
    return (
    <Modal
      className="modal-container"
      overlayClassName="modal-overlay"
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <div className="modal-content">
        {children}
        <h3>¡Haz click en la comida!</h3>
        <ul>
          {arrayProductos.map(producto=>(
           <>
              {producto.cantidad > 0 && (
              <li>
              <div>
              <img onClick ={seleccionarComida}
               src={producto.imagen}
                alt={producto.nombre} 
                className="lista-comida"
                data-puntos={producto.puntos}
                data-id={producto.id} />
              <p>{producto.cantidad}</p>
             
              </div>
              </li>
            )}   
            </>
            
          ))}
        </ul>
        <button className='cerrar' onClick={onClose}>X</button>
      </div>
    </Modal>
    );
};

export default InventarioComida;
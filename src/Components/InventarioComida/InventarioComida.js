import React from 'react';
import Modal from 'react-modal';

import './InventarioComida.css';
import VolverIcon from "../../images/cerrar.png";


const InventarioComida = ({ isOpen, onClose, children,
  seleccionarComida, arrayProductos }) => {


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
        <div className="row-1">
          <div className="col">
            <h1 className="titulo-tienda">¡Haz click en la comida!</h1>
            <button className='cerrar' onClick={onClose}>
          <img className="foto" src={VolverIcon} alt="cerrar" />
        </button>
          </div>
        </div>
        
        <ul className='lista'>
          {arrayProductos.map(producto => (
            <>
              {producto.cantidad > 0 && (
                <li>
                  <div className='objeto'>
                    <img onClick={seleccionarComida}
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
        
      </div>
    </Modal>
  );
};

export default InventarioComida;
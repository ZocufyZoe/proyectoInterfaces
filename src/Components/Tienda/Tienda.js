import React from 'react';
import Modal from 'react-modal';
import { usePet } from "../PetContext";
import { useState } from "react";
import './Tienda.css';
import coin from '../../images/coin.png'
import Flechitas from '../Flechitas/Flechitas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmacionTienda from '../ConfirmacionTienda/ConfirmacionTienda';



/*
 arrayProductos={products}
          modificarArray={setProducts}

*/
const Tienda = ({ isOpen, onClose, arrayProductos, modificarArray}) => {
    
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const[totalCost, setTotalCost]=useState(0);


    //abre segundo modal
  const handleOpenConfirm = () => {
    setIsConfirmOpen(true);
  };

  //cierra segundo modal, vuelve tienda in cambiar nada
  const handleCloseConfirm = () => {
    setIsConfirmOpen(false);
    
  };

  //cierra segundo modal, ha aceptado y vuelve pag principal
  const handleAcceptConfirm = () => {
    setIsConfirmOpen(false);
    toast.success('¡Compra realizada con éxito!');
    handleCloseTienda();
    
  };

  //Te vas de la tienda pulsando la X
  const handleCloseTienda = () => {
    onClose();
    setTotalCost(0); 
   
  }   

    const {money} = usePet();

    return (
        <Modal 
            className="modal-container-tienda"
            overlayClassName="modal-overlay-tienda"
            isOpen={isOpen}
            onRequestClose={onClose}>
            <div className="modal-content">
                <h1>Tienda</h1>
                <div className='dinero-tienda'>
                    <img className="icon" src={coin}></img>
                    <h2>total: {money}</h2>
                    
                </div>


                <div className='articulos'>
                    <table>
                        
                        {arrayProductos.map(producto=>(
                          <td>
                            <div className='content-articulo'>
                            <img className='img-tienda' src={producto.imagen} alt={producto.nombre} />
                            <p>Precio unidad: {producto.precio} <img className="icon-p" src={coin}/></p>

                            <Flechitas 
                                className='flechita'
                                costeTotal={totalCost}
                                cambiarCosteTotal={setTotalCost}
                                productos={arrayProductos}
                                modificarProductos={modificarArray}
                                precio={producto.precio}
                                idProducto={producto.id}
                                cantidadProvisional={producto.cantidadCarro} />
                            </div>
                          </td>
                        ))}
                        
                    </table>

                </div>
                
               
                <div className='costeTotal-tienda'>
                    <img className="icon" src={coin}></img>
                    <h2>Coste total: {totalCost}</h2>

                </div>
                <button onClick={handleOpenConfirm} className='button-tienda'>Comprar</button>

                <button className='cerrar' onClick={handleCloseTienda}>X</button>

                <ConfirmacionTienda
                    isOpen={isConfirmOpen}
                    onClose={handleCloseConfirm}
                    onAccept={handleAcceptConfirm}
                    costeCompra={totalCost}
                    productos={arrayProductos}
                    modificarProductos={modificarArray}

                />

            </div>
        </Modal>
    );
};

export default Tienda;


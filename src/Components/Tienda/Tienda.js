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
import VolverIcon from "../../images/cerrar.png";



/*
 arrayProductos={products}
          modificarArray={setProducts}

*/
const Tienda = ({ isOpen, onClose, arrayProductos, modificarArray }) => {

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [totalCost, setTotalCost] = useState(0);


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

  const { money } = usePet();

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const productRows = chunkArray(arrayProductos, 3);

  return (
    <Modal
      className="tienda-container"
      overlayClassName="modal-overlay-tienda"
      isOpen={isOpen}
      onRequestClose={onClose}>

      <div className="container-fluid">
        <div className="row-1">
          <div className="col">
            <h1 className="titulo-tienda">Tienda</h1>
            <button type="button" className='volver' onClick={handleCloseTienda}>
              <img className="foto" src={VolverIcon} alt="cerrar" />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className='scrollable'>
              {productRows.map((row, rowIndex) => (
                <tr key={rowIndex} className='pantallaTienda'>
                  {row.map(producto => (
                    <td key={producto.id}>
                      <div className='content-articulo'>
                        <img className='img-tienda' src={producto.imagen} alt={producto.nombre} />
                        <p>Precio unidad: {producto.precio} <img className="icon-p" src={coin} alt="coin" /></p>
                        <Flechitas
                          className='flechita'
                          costeTotal={totalCost}
                          cambiarCosteTotal={setTotalCost}
                          productos={arrayProductos}
                          modificarProductos={modificarArray}
                          precio={producto.precio}
                          idProducto={producto.id}
                          cantidadProvisional={producto.cantidadCarro}
                        />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </div>

          </div>
          <div className="col-md-4">
            <div className="row">
              <div className='dinero-tienda'>
                <h2>Total: {money}</h2> <img className="icon" src={coin} alt="coin" />
              </div>

            </div>
            <div className="row">
              <div className='costeTotal-tienda'>
                <h2>Coste total: {totalCost}</h2> <img className="icon" src={coin} alt="coin" />

              </div>
            </div>
            <div className="row">
              <td colSpan="3" className='button-celda'>
                <button onClick={handleOpenConfirm} className='button-tienda'>Comprar</button>
              </td>
            </div>
          </div>
        </div>
      </div>


      <ConfirmacionTienda
        isOpen={isConfirmOpen}
        onClose={handleCloseConfirm}
        onAccept={handleAcceptConfirm}
        costeCompra={totalCost}
        productos={arrayProductos}
        modificarProductos={modificarArray}

      />
    </Modal>
  );
};

export default Tienda;


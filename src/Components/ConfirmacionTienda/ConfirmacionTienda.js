import React from 'react';
import Modal from 'react-modal';
import { usePet } from "../PetContext";
import './ConfirmacionTienda.css';
import coin from '../../images/coin.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConfirmacionTienda = ({ isOpen, onClose, onAccept, costeCompra, productos, modificarProductos }) => {
  const { money, setMoney } = usePet();

  const handleAceptarCompra = () => {
    if ((money - costeCompra > 0)) {
      modificarProductos(productos.map(producto => ({ ...producto, cantidad: producto.cantidadCarro + producto.cantidad })));
      setMoney(money - costeCompra);
      toast.success('¡Compra realizada con éxito!');
      setTimeout(() => {
        onAccept();
      }, 2000);
    } else {
      toast.error('¡No tienes dinero suficiente! Reduce el precio de tu compra o vuelve con más monedas.')
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  }

  // Función para dividir el array en subarrays de 3 elementos
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  // Filtrar productos que cumplen con la condición cantidadCarro > 0
  const filteredProductos = productos.filter(producto => producto.cantidadCarro > 0);

  // Dividir productos filtrados en subarrays de 3 elementos
  const productosChunks = chunkArray(filteredProductos, 3);

  return (
    <>
      <ToastContainer />

      <Modal
        className="modal-container-tienda"
        overlayClassName="modal-overlay-tienda"
        isOpen={isOpen}
      >
        <div className="row-1">
          <div className="col">
            <h1 className="titulo-tienda">Revisa tu compra</h1>
          </div>
        </div>

        <div className="modal-content">
          <div className="row">
            <div className="col-md-8">
              <div className='scrollable'>
                <table>
                  <tbody>
                    {productosChunks.map((chunk, chunkIndex) => (
                      <tr key={chunkIndex}>
                        {chunk.map((producto, productoIndex) => (
                          <td key={productoIndex}>
                            <div className='content-articulo'>
                              <img className='img-tienda' src={producto.imagen} alt={producto.nombre} />
                              <p>Cantidad: {producto.cantidadCarro}</p>
                              <p>Precio unidad: {producto.precio}<img className="icon-p" src={coin} /></p>
                            </div>
                          </td>
                        ))}
                        {/* Rellenar celdas vacías si el chunk tiene menos de 3 productos */}
                        {chunk.length < 3 && [...Array(3 - chunk.length)].map((_, index) => (
                          <td key={`empty-${index}`} />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className='dinero-tienda'>
                  <h3>Total: {money}</h3> <img className="icon" src={coin} alt="coin" />
                </div>
              </div>

              <div className="row">
                <div className='costeTotal-tienda'>
                  <h3>Coste total: {costeCompra}</h3><img className="icon" src={coin} alt="coin" />
                </div>
              </div>

              <div className="row">
                <div className='dinero-tienda'>
                  <h3>Tu dinero: {money}</h3> <img className="icon" src={coin} alt="coin" />
                </div>
              </div>

              <div className="row">
                <div className='dinero-tienda'>
                  <h3>Dinero Restante: {money - costeCompra}</h3> <img className="icon" src={coin} alt="coin" />
                </div>
              </div>
            </div>
          </div>

          <div className="row-1">
          <div className="col">
            <h3 className="titulo-tienda">¿Quieres realizar la compra?</h3>
          </div>
        </div>

          
          <div className='row'>
            <button className='button-aceptar' onClick={handleAceptarCompra}>Aceptar</button>
          <button className='button-cancelar' onClick={onClose}>Cancelar</button>
          </div>
          
        </div>
      </Modal>
    </>
  );
};

export default ConfirmacionTienda;

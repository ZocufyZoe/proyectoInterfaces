import React from 'react';
import Modal from 'react-modal';
import { usePet } from "../PetContext";
import './ConfirmacionTienda.css';
import coin from '../../images/coin.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ConfirmacionTienda = ({ isOpen, onClose, onAccept,costeCompra,
    productos, modificarProductos}) => {

   
    const handleAceptarCompra = () => {

      if((money-costeCompra>0)){
          modificarProductos(productos.map(producto => ( { ...producto, cantidad: producto.cantidadCarro+producto.cantidad})));
          setMoney(money-costeCompra);
          toast.success('¡Compra realizada con éxito!');
          setTimeout(() => {
            onAccept();
        }, 2000);
          
      }else{
          toast.error('¡No tienes dinero suficiente! Reduce el precio de tu compra o vuelve con más monedas.')
          setTimeout(() => {
            onClose();
        }, 3000);
      }
      
    }     
 
    const {money,setMoney} = usePet();
  return (
    <>
    <ToastContainer/>

    <Modal 
    className="modal-container-tienda"
    overlayClassName="modal-overlay-tienda"
    isOpen={isOpen}
    >
    
      <div className="modal-content">
        <h2>Revisa tu compra</h2>
        <div className='costeTotal-tienda'>
            <img className="icon" src={coin}></img>
            <h2>Coste total: {costeCompra}</h2>
        </div>
        <div className='dinero-tienda'>
            <img className="icon" src={coin}></img>
            <h2>Tu dinero: {money}</h2>            
        </div>

        <div className='dinero-tienda2'>
            <img className="icon" src={coin}></img>
            <h2>DineroRestante: {money-costeCompra}</h2>            
        </div>


        <table>
            {productos.map(producto=>(
                
                    <div className='content-articulo'>
                    <>
                    {producto.cantidadCarro > 0 && (
                    <td>
                        <div>
                        <img src={producto.imagen} alt={producto.nombre} />
                        <p> Cantidad seleccionada: {producto.cantidadCarro}</p>
                        <p>Precio unidad: {producto.precio}<img className="icon-p" src={coin}/></p>
                        </div>
                    </td>    
              
                    )}   
                    </>
                    </div>
                
            ))}            
        </table>
        <h3>¿Quieres realizar la compra?</h3>
        <button onClick={handleAceptarCompra}>Aceptar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
   
    </Modal>
    </>
  );
};

export default ConfirmacionTienda;
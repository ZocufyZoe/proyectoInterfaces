import './Footer.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Footer({ onActivateHeart, onCleaningMode, onHandleCleaningDone,
  openDecoF, openInventary, openTiendita, arrayProductos, modificarArray }) {

  const [showTooltip, setShowTooltip] = useState(false);

  function afectoHandler() {
    onActivateHeart(true);
    onHandleCleaningDone();
  }

  function cleaningHandler() {
    onActivateHeart(false);
    onCleaningMode();
  }

  function tiendaHandler() {
    setShowTooltip(false); // Ocultar el tooltip al hacer clic en "Tienda"
    modificarArray(arrayProductos.map(producto => ({ ...producto, cantidadCarro: 0 })));
    openTiendita(true);
  }

  return (
    <div className="footer">
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id="tooltip-afecto">
            Haz click en el corazón para dar amor a tu mascota
          </Tooltip>
        }
      >
        <Button tabIndex="0" variant="secondary" onClick={afectoHandler} aria-describedby="tooltip-afecto">Afecto</Button>
      </OverlayTrigger>

      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id="tooltip-comida">
            Selecciona la comida de tu inventario.
          </Tooltip>
        }
      >
        <Button tabIndex="0" variant="secondary" onClick={() => openInventary(true)} aria-describedby="tooltip-comida">Comida</Button>
      </OverlayTrigger>

      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id="tooltip-limpieza">
            Limpia y refresca a tu mascota con un buen baño.
          </Tooltip>
        }
      >
        <Button tabIndex="0" variant="secondary" onClick={cleaningHandler} aria-describedby="tooltip-limpieza">Limpieza</Button>
      </OverlayTrigger>

      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id="tooltip-juegos">
            Juega con tu mascota y gana monedas.
          </Tooltip>
        }
      >
        <Link to="/game" tabIndex="-1">
          <Button tabIndex="0" variant="secondary" aria-describedby="tooltip-juegos">Juegos</Button>
        </Link>
      </OverlayTrigger>

      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id="tooltip-tienda">
            Compra comida para tu mascota.
          </Tooltip>
          
        }
      >
        <Button tabIndex="0" variant="secondary" onClick={tiendaHandler} onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} aria-describedby="tooltip-tienda">Tienda</Button>
      </OverlayTrigger>

      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id="tooltip-deco">
            Decora el fondo donde se situará tu mascota.
          </Tooltip>
        }
      >
        <Button tabIndex="0" variant="secondary" onClick={() => openDecoF(true)} aria-describedby="tooltip-comida">Decoración</Button>
      </OverlayTrigger>
    </div>
  );
}

export default Footer;
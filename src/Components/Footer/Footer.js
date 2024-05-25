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
          <Tooltip id="tooltip-top">
            Haz click en el corazon para dar amor a tu mascota
          </Tooltip>
        }
      >
        <Button variant="secondary" onClick={afectoHandler}>Afecto</Button>
      </OverlayTrigger>

      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id="tooltip-top">
            Selecciona la comida de tu inventario.
          </Tooltip>
        }
      >
        <Button variant="secondary" onClick={() => openInventary(true)}>Comida</Button>
      </OverlayTrigger>

      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id="tooltip-top">
            Limpia y refresca a tu mascota con un buen baño.
          </Tooltip>
        }
      >
        <Button variant="secondary" onClick={cleaningHandler}>Limpieza</Button>
      </OverlayTrigger>

      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id="tooltip-top">
            Juega con tu mascota y gana monedas.
          </Tooltip>
        }
      >
        <Link to="/game">
          <Button variant="secondary">Juegos</Button>
        </Link>
      </OverlayTrigger>

      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip id="tooltip-top">
            Compra comida para tu macota.
          </Tooltip>
        }
        //  Para el boton de tienda hacia falta especificar concretamente cuándo mostrar y cuando no el mensaje con un booleano (usestate)
        show={showTooltip}
      >
        <Button
          variant="secondary"
          onClick={tiendaHandler}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          Tienda
        </Button>
      </OverlayTrigger>

      <button onClick={() => openDecoF(true)}>Decoración</button>
    </div>
  );
}

export default Footer;

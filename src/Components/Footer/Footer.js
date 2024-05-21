import './Footer.css';

function Footer({onActivateHeart, onCleaningMode, onHandleCleaningDone,
  openDecoF, openInventary, openTiendita,  arrayProductos, modificarArray}) {

  function afectoHandler () {
    onActivateHeart(true);
    onHandleCleaningDone();
  }

  function cleaningHandler () {
     onActivateHeart(false);
     onCleaningMode();
  }
  function tiendaHandler(){
    modificarArray(arrayProductos.map(producto => ( { ...producto, cantidadCarro: 0})));
    openTiendita(true);
  }

  return (
    <div className="footer">
      <button onClick={afectoHandler}>Afecto</button>
      <button onClick={() => openInventary(true)} >Comida</button>
      <button onClick={cleaningHandler}>Limpieza</button>
      <button>Juegos</button>
      <button onClick={tiendaHandler}>Tienda</button>
      <button onClick={()=>openDecoF(true)}>Decoración</button>
    </div>
  );
}

export default Footer;

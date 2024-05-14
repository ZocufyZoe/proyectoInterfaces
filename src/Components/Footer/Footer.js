import './Footer.css';

function Footer({onActivateHeart, onCleaningMode, onHandleCleaningDone,
  openDecoF, openInventary}) {

  function afectoHandler () {
    onActivateHeart(true);
    onHandleCleaningDone();
  }

  function cleaningHandler () {
     onActivateHeart(false);
     onCleaningMode();
  }

  return (
    <div className="footer">
      <button onClick={afectoHandler}>Afecto</button>
      <button onClick={() => openInventary(true)} >Comida</button>
      <button onClick={cleaningHandler}>Limpieza</button>
      <button>Juegos</button>
      <button>Tienda</button>
      <button onClick={()=>openDecoF(true)}>Decoración</button>
    </div>
  );
}

export default Footer;

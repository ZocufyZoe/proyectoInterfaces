import './Footer.css';

function Footer({onActivateHeart, onCleaningMode, onHandleCleaningDone, onHandleCleaningMode}) {

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
      <button onClick={afectoHandler} >Afecto</button>
      <button>Comida</button>
      <button onClick={cleaningHandler}>Limpieza</button>
      <button>Juegos</button>
      <button>Tienda</button>
      <button>Decoración</button>
    </div>
  );
}

export default Footer;

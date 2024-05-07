import './Footer.css';

function Footer({onActivateHeart, affection}) {

  

  return (
    <div className="footer">
      <button onClick={() => onActivateHeart(true)}>Afecto</button>
      <button>Comida</button>
      <button>Limpieza</button>
      <button>Juegos</button>
      <button>Tienda</button>
      <button>Decoración</button>
    </div>
  );
}

export default Footer;

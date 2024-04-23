import './Footer.css';

function Footer({onIncreaseAffection}) {
  return (
    <div className="footer">
      <button onClick={onIncreaseAffection}>Afecto</button>
      <button>Comida</button>
      <button>Limpieza</button>
      <button>Juegos</button>
      <button>Tienda</button>
      <button>Decoración</button>
    </div>
  );
}

export default Footer;

import './Footer.css';

function Footer({onActivateHeart, affection,openDecoF, openInventary}) {

  

  return (
    <div className="footer">
      <button onClick={() => onActivateHeart(true)}>Afecto</button>
      <button onClick={() => openInventary(true)} >Comida</button>
      <button>Limpieza</button>
      <button>Juegos</button>
      <button>Tienda</button>
      <button onClick={()=>openDecoF(true)}>Decoración</button>
    </div>
  );
}

export default Footer;

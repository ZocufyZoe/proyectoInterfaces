import './Footer.css';

<<<<<<< Updated upstream:proyectoInterfaces-2704ver/src/Components/Footer/Footer.js
function Footer({onIncreaseAffection}) {
  return (
    <div className="footer">
      <button onClick={onIncreaseAffection}>Afecto</button>
      <button>Comida</button>
=======
function Footer({onActivateHeart, affection,openDecoF, openInventary}) {

  

  return (
    <div className="footer">
      <button onClick={() => onActivateHeart(true)}>Afecto</button>
      <button onClick={() => openInventary(true)} >Comida</button>
>>>>>>> Stashed changes:src/Components/Footer/Footer.js
      <button>Limpieza</button>
      <button>Juegos</button>
      <button>Tienda</button>
      <button onClick={()=>openDecoF(true)}>Decoración</button>
    </div>
  );
}

export default Footer;

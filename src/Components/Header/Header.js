import StatusBar from "../StatusBar/StatusBar";
import "./Header.css";
import Ayuda from "../Ayuda/Ayuda";
import { useState } from "react";

function Header({petName,affection,hungriness,cleanliness}) {

  function colorHandler(affection) {
      if (affection < 30) return "red";
      if (affection < 70) return "orange";
      if (affection <= 100) return "lime";
  }

    // Estado para controlar si el pop-up está abierto o cerrado
    const [showPopup, setShowPopup] = useState(false);

    // Función para cambiar el estado al hacer clic en el botón "help-button"
    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
    

  return (
    <header>
      <h1 className="pet-name">{petName}</h1>
        <StatusBar value={affection} max={100} color={colorHandler(affection)} />
        <StatusBar value={hungriness} max={100} color={colorHandler(hungriness)} />
        <StatusBar value={cleanliness} max={100} color={colorHandler(cleanliness)} />
        <button className="help-button" onClick={togglePopup}>?</button>
        {showPopup && <Ayuda Cerrar={togglePopup}/>}
    </header>
  );
}

export default Header;

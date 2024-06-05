import StatusBar from "../StatusBar/StatusBar";
import "./Header.css";
import Ayuda from "../Ayuda/Ayuda";
import { useState } from "react";
import foodLogo from '../../images/food-icon-status-bar.png'
import heartLogo from '../../images/heart-status-logo.png'
import cleanLogo from '../../images/cleaning-status-logo.png'
import coin from '../../images/coin.png'
import { usePet } from "../PetContext";
import Button from 'react-bootstrap/Button';

function Header({petName,affection,hungriness,cleanliness}) {

  function colorHandler(affection) {
      if (affection < 30) return "red";
      if (affection < 70) return "orange";
      if (affection <= 100) return "lime";
  }

  const { money} = usePet();

  const [modalShow, setModalShow] = useState(false);

  return (
    
    <header>
      <h1 className="pet-name">{petName}</h1>
      
        <StatusBar logo={heartLogo} value={affection} max={100} color={colorHandler(affection)} />
        <StatusBar logo={foodLogo} value={hungriness} max={100} color={colorHandler(hungriness)} />
        <StatusBar logo={cleanLogo  } value={cleanliness} max={100} color={colorHandler(cleanliness)} />
        

      <>
        <Button aria-label="Botón de ayuda" className="help-button" onClick={() => setModalShow(true)}>
          ?
        </Button>

        <Ayuda show={modalShow} onHide={() => setModalShow(false)} />
      </>

        <img className="icon" src={coin}></img>
        <h2>total: {money}</h2>
    </header>
  );
}

export default Header;
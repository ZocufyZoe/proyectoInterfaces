import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import regularPet from "../images/pet-images/pou-regular.png";
import greenPet from "../images/pet-images/pou-green.png";
import pinkPet from "../images/pet-images/pou-pink.png";
import redPet from "../images/pet-images/pou-red.png";
import yellowPet from "../images/pet-images/pou-yellow.png";
import bluePet from "../images/pet-images/pou-blue.png";
import { usePet } from "../Components/PetContext";
import "./PantallaSeleccion.css";

function PantallaSeleccion() {
  const { setPetImage } = usePet();
  
  const handleSelect = (selectedIndex) => {
    let selectedImage;

    if (selectedIndex === 0) {
        selectedImage = regularPet
    }
    else if (selectedIndex === 1) {
        selectedImage = redPet
    }
    else if (selectedIndex === 2) {
        selectedImage = greenPet
    }
    else if (selectedIndex === 3) {
        selectedImage = yellowPet
    }
    else if (selectedIndex === 4) {
        selectedImage = pinkPet
    }
    else if (selectedIndex === 5) {
        selectedImage = bluePet
    }

    setPetImage(selectedImage);
  };

  return (
    <>
      <p className="select-pou-text">Selecciona tu mascota</p>
      <div className="container">
        <Carousel interval={null} className="slider bg-secondary" onSelect={handleSelect}>
          <Carousel.Item className="item">
            <img className="d-block w-50" src={regularPet} alt="Pou Color Regular"/>
          </Carousel.Item>

          <Carousel.Item className="item">
            <img className="d-block w-50" src={redPet} alt="Pou Color Blue" />
          </Carousel.Item>

          <Carousel.Item className="item">
            <img className="d-block w-50" src={greenPet} alt="Pou Color Regular"/>
          </Carousel.Item>

          <Carousel.Item className="item">
            <img className="d-block w-50" src={yellowPet} alt="Pou Color Blue" />
          </Carousel.Item>

          <Carousel.Item className="item">
            <img className="d-block w-50" src={pinkPet} alt="Pou Color Regular"/>
          </Carousel.Item>

          <Carousel.Item className="item">
            <img className="d-block w-50" src={bluePet} alt="Pou Color Blue" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="confirm">
        <Link to="/principal">
            <button>Confirmar selección</button>
        </Link>
      </div>
      
    </>
  );
}

export default PantallaSeleccion;

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
import MyVerticallyCenteredModal from "../Components/MyVerticallyCenteredModal/MyVerticallyCenteredModal";

function PantallaSeleccion() {
  const [modalShow, setModalShow] = React.useState(false);

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
      <div className="container">
      <div className="card-custom p-5 mb-4">
      <h1 className="select-pou-text">Selecciona tu mascota</h1>
        <div className="slider bg-secondary">
          
          <Carousel interval={null} className="container-images" onSelect={handleSelect}>
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
          <div className="confirm">
          <Link to="/nombre">
            <button className="botonDegradadoNombre">Ir atrás</button>
          </Link>
          
            <button className="botonDegradadoNombre" onClick={() => setModalShow(true)}>Confirmar selección</button>
          
          </div>
        </div>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )  
}

export default PantallaSeleccion;

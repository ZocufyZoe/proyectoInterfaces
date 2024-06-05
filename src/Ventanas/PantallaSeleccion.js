import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import regularPet from "../images/pet-images/pou-regular.png";
import greenPet from "../images/pet-images/pou-green.png";
import pinkPet from "../images/pet-images/pou-pink.png";
import redPet from "../images/pet-images/pou-red.png";
import yellowPet from "../images/pet-images/pou-yellow.png";
import bluePet from "../images/pet-images/pou-blue.png";
import { usePet } from "../Components/PetContext";
import "./PantallaSeleccion.css";
import MyVerticallyCenteredModal from "../Components/MyVerticallyCenteredModal/MyVerticallyCenteredModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

function PantallaSeleccion() {
  const [modalShow, setModalShow] = useState(false);
  const { setPetImage } = usePet();
  const sliderRef = useRef(null);

  const images = [
    { src: regularPet, alt: "Color Regular" },
    { src: redPet, alt: "Color Rojo" },
    { src: greenPet, alt: "Color Verde" },
    { src: yellowPet, alt: "Color Amarillo" },
    { src: pinkPet, alt: "Color Rosa" },
    { src: bluePet, alt: "Color Azul" }
  ];

  const handleSelect = (selectedIndex) => {
    const selectedImage = images[selectedIndex].src;
    setPetImage(selectedImage);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    afterChange: handleSelect,
    customPaging: i => (
      <button
        type="button"
        aria-label={`Ir a ${images[i].alt}`}
        className="slick-dot-button"
      >
        {`Ir a ${images[i].alt}`}
      </button>
    ),
    appendDots: dots => (
      <ul className="slick-dots" role="tablist">
        {dots.map((dot, index) => (
          <li key={index} role="presentation">
            {dot.props.children}
          </li>
        ))}
      </ul>
    )
  };

  return (
    <>
      <div className="container mt-5">
        <div className="card-custom p-4 mb-4 text-center">
          <h1 className="select-pou-text mb-4">Selecciona tu mascota</h1>
          <div className="slider bg-secondary p-3 mx-auto" style={{ maxWidth: "600px" }}>
            <Slider ref={sliderRef} {...settings} className="container-images">
              {images.map((image, index) => (
                <div key={index} className="carousel-slide" role="tabpanel">
                  <img
                    className="d-block w-75 img-fluid mx-auto"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="confirm mt-4">
          <Link to="/nombre">
            <button className="botonDegradadoNombre">Ir atrás</button>
          </Link>
          
            <button className="botonDegradadoNombre" onClick={() => setModalShow(true)}>Confirmar selección</button>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default PantallaSeleccion;
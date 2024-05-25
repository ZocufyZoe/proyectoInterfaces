import React from 'react';
import './Pet.css'; // Crea este archivo para tus estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import bathtub from "../../images/bathtub.png";
import heart from "../../images/heart.png";

function Pet({ image, cleaningMode, cleanliness, setCleanliness, showHeart, increaseAffection}) {

  const handleMouseEnter = () => {
    if (cleaningMode && cleanliness < 100) {
        let value = 3
        while(cleanliness + value > 100) {
          value = value - 1;
        }
        setCleanliness(cleanliness + value);
    }
  };
  
  return (
    <div className="pet-container d-flex flex-column align-items-center">
      
      {showHeart && !cleaningMode && (
        <>
          <h1 className='heart-info'>Haz click en el corazon!</h1>
          <img onClick={increaseAffection} className="heart-icon" src={heart} alt="heart" />
        </>
      )}

      <div className='cleaning-area' onMouseEnter={handleMouseEnter} />
      <img src={image} alt="Pet" className="pet-image" onDragStart={(e) => e.preventDefault()} />

      {cleaningMode && cleanliness < 100 && (
        <div className="text-center">
          <h1 className='bath-info'>Frota bien a tu mascota!</h1>
          <img className="img-fluid bathtub-icon" src={bathtub} alt="bathtub" />
        </div>
      )}

      

    </div>
  );
}

export default Pet;
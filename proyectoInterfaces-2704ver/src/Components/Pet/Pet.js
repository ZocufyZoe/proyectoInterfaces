import React from 'react';
import './Pet.css'; // Crea este archivo para tus estilos

function Pet({ image }) {
  return (
    <div className="pet-container">
      <img src={image} alt="Pet" className="pet-image" />
    </div>
  );
}

export default Pet;
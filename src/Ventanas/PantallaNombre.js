import React, { useState } from "react";
import { usePet } from "../Components/PetContext";
import { Link } from "react-router-dom";

function PantallaNombre() {
  const { setPetName } = usePet();
  const [inputName, setInputName] = useState("");

  const handleNameChange = (event) => {
    setInputName(event.target.value);
  };

  const handleNameConfirm = () => {
    setPetName(inputName);
  };

  return (
    <>
      <h1>Introduce el nombre de tu mascota:</h1>
      <p>(El nombre puede tener como maximo 20 caracteres)</p>
      <input value={inputName} maxLength={20} onChange={handleNameChange} type="text" />
      <Link to="/seleccion">
        <button onClick={handleNameConfirm}>Confirmar nombre</button>
      </Link>
    </>
  );
}
export default PantallaNombre;

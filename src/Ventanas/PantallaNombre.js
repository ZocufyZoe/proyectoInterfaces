import React, { useState } from "react";
import { usePet } from "../Components/PetContext";
import { Link } from "react-router-dom";
import "./PantallaNombre.css";

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
    <div className="containerNombre d-flex flex-column align-items-center">
      <div className="card-custom p-5 mb-4">
        <h1 className="tituloNombre mb-4">Introduce el nombre de tu mascota:</h1>
        <p className="mb-4">(El nombre puede tener como máximo 20 caracteres)</p>
        <label className="visually-hidden" htmlFor="namedInput">Introduce el nombre de tu mascota (El nombre puede tener como máximo 20 caracteres): </label>
        <input id="namedInput" type="text" name="name" value={inputName} maxLength={20} onChange={handleNameChange} className="form-control mb-4" />
      </div>
      <Link to="/seleccion">
        <button onClick={handleNameConfirm} className="botonDegradadoNombre">Confirmar nombre</button>
      </Link>
    </div>
  );
}

export default PantallaNombre;


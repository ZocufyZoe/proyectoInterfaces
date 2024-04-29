// Creamos un archivo PetContext.js
import React, { useState, createContext, useContext } from 'react';

const PetContext = createContext();

// Hook personalizado 
// Cualquier componente que llame a usePet recibira los valores actuales de petName y setPetName
export function usePet() {
  return useContext(PetContext);
}

// Componente 
export const PetProvider = ({ children }) => {
  const [petName, setPetName] = useState('');

  return (
    <PetContext.Provider value={{ petName, setPetName }}>
      {children}
    </PetContext.Provider>
  );
};

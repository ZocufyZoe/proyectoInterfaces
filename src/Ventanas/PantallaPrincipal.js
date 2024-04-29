import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Pet from "../Components/Pet/Pet";
import regularPet from '../images/pet-images/pou-regular.png';
import '../App.css';
import { usePet } from "../Components/PetContext";

function PantallaPrincipal(){
    // Estado para los atributos de la mascota
  const [affection, setAffection] = useState(100); 

  // Hook de React que te permite ejecutar efectos secundarios en componentes funcionales
  useEffect(() => {
    // Función de JavaScript que ejecuta repetidamente una función dada a intervalos establecidos (en milisegundos)
    const intervalId = setInterval(() => {
      setAffection((currentAffection) => {
       
        return currentAffection > 0 ? currentAffection - 1 : 0;
      });
    }, 1000 * 1); // decrementa cada 1 segundo 

    // Siempre limpiar intervalos (si no pueden aparecer varios intervalos que actuen sobre el componente y provoca situaciones no esperadas)
    return () => clearInterval(intervalId);
  }, []); // El array vacío asegura que el efecto se ejecute solo después del montaje


  // Funciones para cambiar el estado
  const increaseAffection = () => {
    if (affection >= 0 && affection <= 25) setAffection(affection + 10); 
    if (affection > 25 && affection <= 50) setAffection(affection + 5);
    if (affection > 50 && affection <= 75) setAffection(affection + 3);
    if (affection > 75 && affection <= 90) setAffection(affection + 1);
    if (affection > 90 && affection <= 100) setAffection(affection + 0.5);
  };


  const [hungriness, setHungriness] = useState(50);

  const [cleanliness, setCleanliness] = useState(100);

  const [petImage, setPetImage] = useState(regularPet);

  const { petName } = usePet();

  return( <>
        <div className="App">
        <Header 
        petName={petName}
        affection={affection}
        hungriness={hungriness}
        cleanliness={cleanliness}
        />

        <Pet image={petImage} />

        <Footer
         onIncreaseAffection={increaseAffection}
        />
        </div>
    </>
    );
}
export default PantallaPrincipal;
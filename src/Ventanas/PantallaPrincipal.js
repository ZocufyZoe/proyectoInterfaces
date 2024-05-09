import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Pet from "../Components/Pet/Pet";
import regularPet from '../images/pet-images/pou-regular.png';
import '../App.css';
import { usePet } from "../Components/PetContext";

import heart from "../images/heart.png"
import './PantallaPrincipal.css';


function PantallaPrincipal(){
    // Estado para los atributos de la mascota
  const [affection, setAffection] = useState(10); 

  const [hungriness, setHungriness] = useState(50);

  const [cleanliness, setCleanliness] = useState(100);

  const [showHeart, setShowHeart] = useState(false);

  // Hook de React que te permite ejecutar efectos secundarios en componentes funcionales
  
  useEffect(() => {
    // Función de JavaScript que ejecuta repetidamente una función dada a intervalos establecidos (en milisegundos)
    const intervalId = setInterval(() => {
      setAffection((currentAffection) => {

        let decreaseValue = 1;
        if(currentAffection >= 90 && currentAffection <= 100) {
          
        }
        else if(currentAffection >= 50  && currentAffection < 90) {
          decreaseValue = 2;
        }
        else if (currentAffection >= 0  && currentAffection < 50) {
          decreaseValue = 3;
        }
      
        return currentAffection > 0 ? currentAffection - decreaseValue : 0;
      });
    }, 1000 * 1); // decrementa cada 1 segundo IMPORTANTE: AUN SE DEBE ACLARAR CUANTOS SEGUNDOS ES LO OPTIMO EN UN ESCENARIO REAL

    // Siempre limpiar intervalos (si no pueden aparecer varios intervalos que actuen sobre el componente y provoca situaciones no esperadas)
    return () => clearInterval(intervalId);
  }, []); // El array vacío asegura que el efecto se ejecute solo después del montaje


  // Funciones para cambiar el estado
  const increaseAffection = () => {
    if (affection >= 0 && affection <= 25) setAffection(affection + 10); 
    if (affection > 25 && affection <= 50) setAffection(affection + 5);
    if (affection > 50 && affection <= 75) setAffection(affection + 3);
    if (affection > 75 && affection <= 100) setAffection(affection + 2);
    if (affection == 100) setShowHeart(false)
  };

  const { petName, petImage } = usePet();

  return( 
      <>
        <div className="App">
        <Header 
        petName={petName}
        affection={affection}
        hungriness={hungriness}
        cleanliness={cleanliness}
        />

        <Pet image={petImage} />

        <Footer
         onActivateHeart={setShowHeart}
         affection={affection}
        />

        <div className="heart-container">
          {showHeart && (<img onClick={increaseAffection} className="heart-icon" src={heart} alt="heart"></img> 
          )}
        </div>
        </div>
    </>
    );
}
export default PantallaPrincipal;
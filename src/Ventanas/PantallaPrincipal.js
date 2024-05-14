import './PantallaPrincipal.css';
import '../App.css';
import { useState } from "react";
import { useEffect } from "react";
import { usePet } from "../Components/PetContext";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Pet from "../Components/Pet/Pet";

import love_speech_balloon from "../images/love_speech.png";
import bathtub from "../images/bathtub.png";
import love_sound from "../sounds/I_love_you.mp3";



function PantallaPrincipal(){
  const { petName, petImage } = usePet();

  // Estado para los atributos de la mascota
  const [affection, setAffection] = useState(10); 
  const [hungriness, setHungriness] = useState(50);
  const [cleanliness, setCleanliness] = useState(10);
  const [showHeart, setShowHeart] = useState(false);
  const [showILoveYou, setShowILoveYou] = useState(false);
  const [cleaningMode, setCleaningMode] = useState(false);




  // Para mostrar cursor como esponja
  const handleCleaningMode = () => {
      setCleaningMode(true);
      document.body.classList.add('cursor-sponge');
  };

  const handleCleaningDone = () => {
      setCleaningMode(false);
      document.body.classList.remove('cursor-sponge');
  };
  
  
  useEffect(() => {
    // Función de JavaScript que ejecuta repetidamente una función dada a intervalos establecidos (en milisegundos)
    const intervalId = setInterval(() => {
      setAffection((currentAffection) => {

        let decreaseValue = 1;
  
        if(currentAffection >= 50  && currentAffection < 90) {
          decreaseValue = 2;
        }
        else if (currentAffection >= 0  && currentAffection < 50) {
          decreaseValue = 3;
        }
      
        return currentAffection > 0 ? currentAffection - decreaseValue : 0;
      });
    }, 1000 * 10); // decrementa cada 20 segundo IMPORTANTE: AUN SE DEBE ACLARAR CUANTOS SEGUNDOS ES LO OPTIMO EN UN ESCENARIO REAL

    // Siempre limpiar intervalos (si no pueden aparecer varios intervalos que actuen sobre el componente y provoca situaciones no esperadas)
    return () => clearInterval(intervalId);
  }, []); // El array vacío asegura que el efecto se ejecute solo después del montaje


  useEffect(() => {
    console.log(cleanliness)
    if(cleanliness === 100) {
      console.log("me voy")
      handleCleaningDone();
    }
  }, [cleanliness]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCleanliness((currentCleanliness) => {

        return currentCleanliness > 0 ? currentCleanliness - 1 : 0;
      });
    }, 1000 * 5); 
    return () => clearInterval(intervalId);
  }, []);


 

  // Funciones para cambiar el estado
  const increaseAffection = () => {
    console.log(affection)
    if (affection >= 0 && affection <= 25) setAffection(affection + 10); 
    else if (affection > 25 && affection <= 50) setAffection(affection + 5);
    else if (affection > 50 && affection <= 75) setAffection(affection + 3);
    else if (affection > 75 && affection < 98) setAffection(affection + 2);
    else if (affection >= 98 && affection < 100) setAffection(affection + 1);

    if (affection === 100) {
       setShowHeart(false);
       new Audio(love_sound).play();
       setShowILoveYou(true);
       setTimeout(() => setShowILoveYou(false), 2500);
    }
  };

  return( 
        <div className="App">
          <Header 
          petName={petName}
          affection={affection}
          hungriness={hungriness}
          cleanliness={cleanliness}
          />

          <Pet 
          image={petImage} 
          cleaningMode={cleaningMode}
          cleanliness={cleanliness}
          setCleanliness={setCleanliness}
          showHeart={showHeart}
          increaseAffection={increaseAffection}
          />

          <Footer
          onActivateHeart={setShowHeart}
          onCleaningMode={handleCleaningMode}
          onHandleCleaningDone={handleCleaningDone}
          />

          

          <div className="speech-balloon-container">
            {showILoveYou && (<img className="speech-balloon-icon" src={love_speech_balloon} alt="i love you speech balloon"></img> 
            )}
          </div>


          
          

        </div>
    
    );
}
export default PantallaPrincipal;
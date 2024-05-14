import './PantallaPrincipal.css';
import '../App.css';
import { useState } from "react";
import { useEffect } from "react";
import { usePet } from "../Components/PetContext";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Pet from "../Components/Pet/Pet";
import Fondo from "../Components/Fondo/Fondo"
import MenuDecoracion from "../Components/MenuDecoracion/MenuDecoracion";
import InventarioComida from "../Components/InventarioComida/InventarioComida";
import fondobasico2 from '../images/fondo-images/fondobasico2.jpg';
import love_speech_balloon from "../images/love_speech.png";
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
    if(cleanliness<100){
      setCleaningMode(true);
      document.body.classList.add('cursor-sponge');
    }
  };

  const handleCleaningDone = () => {
      setCleaningMode(false);
      document.body.classList.remove('cursor-sponge');
  };
  

  // Hook de React que te permite ejecutar efectos secundarios en componentes funcionales
  
  useEffect(() => {
    // Función de JavaScript que ejecuta repetidamente una función dada a intervalos establecidos (en milisegundos)
    const intervalId = setInterval(() => {
  
      setHungriness((currentH) => {

        let decreaseValue = 1;
        if(currentH >= 50  && currentH < 90) {
          decreaseValue = 2;
        }
        else if (currentH >= 0  && currentH < 50) {
          decreaseValue = 3;
        }
      
        return currentH > 0 ? currentH - decreaseValue : 0;
      });

    }, 1000 * 10); // decrementa cada 1 segundo IMPORTANTE: AUN SE DEBE ACLARAR CUANTOS SEGUNDOS ES LO OPTIMO EN UN ESCENARIO REAL

    // Siempre limpiar intervalos (si no pueden aparecer varios intervalos que actuen sobre el componente y provoca situaciones no esperadas)
    return () => clearInterval(intervalId);
  }, []); // El array vacío asegura que el efecto se ejecute solo después del montaje

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
    }, 1000 * 30); // decrementa cada 20 segundo IMPORTANTE: AUN SE DEBE ACLARAR CUANTOS SEGUNDOS ES LO OPTIMO EN UN ESCENARIO REAL

    // Siempre limpiar intervalos (si no pueden aparecer varios intervalos que actuen sobre el componente y provoca situaciones no esperadas)
    return () => clearInterval(intervalId);
  }, []); // El array vacío asegura que el efecto se ejecute solo después del montaje


  useEffect(() => {
    if(cleanliness === 100) {
      handleCleaningDone();
    }
  }, [cleanliness]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCleanliness((currentCleanliness) => {

        return currentCleanliness > 0 ? currentCleanliness - 1 : 0;
      });
    }, 1000 * 30); 
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

  const decreaseHungriness = () => {
    setHungriness(hungriness+20);
  }

//rebeca working
  const [isDecoOpen, setIsDecoOpen] = useState(false);
  const closeDeco = () => {
      setIsDecoOpen(false);
  };
  const[fondoImage,setFondoImage] = useState(fondobasico2)
  const cambioFondo=(imageDeseada)=>{
      setFondoImage(imageDeseada);
  };
  const [isFoodInventoryOpen, setFoodInventoyOpen] = useState(false);
  const closeInventory = () => {
      setShowFood(false);
      setComidaSelected("");
      setFoodInventoyOpen(false);
  };

  const [showFood, setShowFood] = useState(false);
;

  const[comidaSelected, setComidaSelected]=useState("")
    const seleccionarFood =(event)=>{
        setComidaSelected(event.target.src);
        decreaseHungriness();
        setShowFood(true);
    };
  

  return( <>
        <div className="App">
          
        <Fondo image= {fondoImage}/>
          
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

         openDecoF={setIsDecoOpen}
         openInventary={setFoodInventoyOpen}
         
        />

       
        <div className="food-container">
          { showFood && (<img className="food-icon" src={comidaSelected} alt="food"></img> 
          )}
        </div>
        <div className="food-message">
          {showFood && (<h1>Ñam Ñam!</h1>)}
        </div>
        <div className="speech-balloon-container">
            {showILoveYou && (<img className="speech-balloon-icon" src={love_speech_balloon} alt="i love you speech balloon"></img> 
            )}
        </div>
        
        
          <MenuDecoracion isOpen={isDecoOpen} 
            onClose={closeDeco} 
            img_func={cambioFondo}
            imgActual={fondoImage}/>
          
          <InventarioComida isOpen={isFoodInventoryOpen} 
            onClose={closeInventory}
            seleccionarComida={seleccionarFood} 
            showComida={setShowFood}
            />
       
        </div>
    </>
    );
}
export default PantallaPrincipal;
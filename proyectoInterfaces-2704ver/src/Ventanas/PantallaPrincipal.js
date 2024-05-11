import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Pet from "../Components/Pet/Pet";
import Fondo from "../Components/Fondo/Fondo"
import fondobasico2 from '../images/fondo-images/fondobasico2.jpg';
import beeRoom from '../images/fondo-images/beeRoom.jpg';
import regularPet from '../images/pet-images/pou-regular.png';
import '../App.css';
<<<<<<< Updated upstream:proyectoInterfaces-2704ver/src/Ventanas/PantallaPrincipal.js
=======
import { usePet } from "../Components/PetContext";
import Modal from 'react-modal';
import heart from "../images/heart.png"
import './PantallaPrincipal.css';
import MenuDecoracion from "../Components/MenuDecoracion/MenuDecoracion";
import InventarioComida from "../Components/InventarioComida/InventarioComida";
>>>>>>> Stashed changes:src/Ventanas/PantallaPrincipal.js

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
<<<<<<< Updated upstream:proyectoInterfaces-2704ver/src/Ventanas/PantallaPrincipal.js
    }, 1000 * 1); // decrementa cada 1 segundo 
=======

      setHungriness((currentH) => {

        let decreaseValue = 1;
        if(currentH >= 90 && currentH <= 100) {
          
        }
        else if(currentH >= 50  && currentH < 90) {
          decreaseValue = 2;
        }
        else if (currentH >= 0  && currentH < 50) {
          decreaseValue = 3;
        }
      
        return currentH > 0 ? currentH - decreaseValue : 0;
      });

    }, 1000 * 1); // decrementa cada 1 segundo IMPORTANTE: AUN SE DEBE ACLARAR CUANTOS SEGUNDOS ES LO OPTIMO EN UN ESCENARIO REAL
>>>>>>> Stashed changes:src/Ventanas/PantallaPrincipal.js

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

  const decreaseHungriness = () => {
    setHungriness(hungriness+20);
  }


  const [hungriness, setHungriness] = useState(50);

  const [cleanliness, setCleanliness] = useState(100);

<<<<<<< Updated upstream:proyectoInterfaces-2704ver/src/Ventanas/PantallaPrincipal.js
  const [petImage, setPetImage] = useState(regularPet);
=======
  const [showHeart, setShowHeart] = useState(false);
  

  const { petName, petImage } = usePet();
  

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
  
>>>>>>> Stashed changes:src/Ventanas/PantallaPrincipal.js

  return( <>
        <div className="App">
          
        <Fondo image= {fondoImage}/>
          
        <Header 
        petName="Roberto"
        affection={affection}
        hungriness={hungriness}
        cleanliness={cleanliness}
        />

        <Pet image={petImage} />

        <Footer
<<<<<<< Updated upstream:proyectoInterfaces-2704ver/src/Ventanas/PantallaPrincipal.js
         onIncreaseAffection={increaseAffection}
        />
=======
         onActivateHeart={setShowHeart}
         affection={affection}
         openDecoF={setIsDecoOpen}
         openInventary={setFoodInventoyOpen}
         
        />

        <div className="heart-container">
          {showHeart && (<img onClick={increaseAffection} className="heart-icon" src={heart} alt="heart"></img> 
          )}
        </div>

        <div className="food-container">
          { showFood && (<img className="food-icon" src={comidaSelected} alt="food"></img> 
          )}
        </div>
        <div className="food-message">
          {showFood && (<h1>Ñam Ñam!</h1>)}
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
       
>>>>>>> Stashed changes:src/Ventanas/PantallaPrincipal.js
        </div>
    </>
    );
}
export default PantallaPrincipal;
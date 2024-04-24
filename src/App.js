import { useState } from "react";
import { useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import './App.css';


function App() {
  // Estado para los atributos de la mascota
  const [affection, setAffection] = useState(0); 


  useEffect(() => {
    // Establece un intervalo que decrementa la barra de afecto
    const intervalId = setInterval(() => {
      setAffection((prevAffection) => {
       
        return prevAffection > 0 ? prevAffection - 1 : 0;
      });
    }, 1000 * 1); // decrementa cada 1 segundo 

    // Función de limpieza para ejecutarse cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []); // El array vacío asegura que el efecto se ejecute solo después del montaje



  const [hungriness, setHungriness] = useState(50);

  const [cleanliness, setCleanliness] = useState(100);

  

  // Funciones para cambiar el estado
  const increaseAffection = () => {
    if (affection >= 0 && affection <= 25) setAffection(affection + 10); 
    if (affection > 25 && affection <= 50) setAffection(affection + 5);
    if (affection > 50 && affection <= 75) setAffection(affection + 3);
    if (affection > 75 && affection <= 90) setAffection(affection + 1);
    if (affection > 90 && affection <= 100) setAffection(affection + 0.5);
  };

 
  return (
    <div className="App">
    <Header 
      petName="Roberto"
      affection={affection}
      hungriness={hungriness}
      cleanliness={cleanliness}
      onIncreaseAffection={increaseAffection}
    />

    <Footer
      onIncreaseAffection={increaseAffection}
    />
  </div>
  );
}

export default App;



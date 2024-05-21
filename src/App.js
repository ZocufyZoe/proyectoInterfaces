import { Routes, Route } from "react-router-dom";
import PantallaInicio from "./Ventanas/PantallaInicio";
import PantallaNombre from "./Ventanas/PantallaNombre";
import PantallaSeleccion from "./Ventanas/PantallaSeleccion";
import PantallaPrincipal from "./Ventanas/PantallaPrincipal";
import BackgroundMusic from "./Components/BackgroundMusic";
import { PetProvider } from "./Components/PetContext";
 // <BackgroundMusic src="./sounds/comiendo.mp3" /> 

function App() {
  return (
    <>
    
    <PetProvider>
      
      <Routes>
        
        <Route
          path="/"
          element={
            <>
            
              <PantallaInicio />
            
            </>
          }
        />
        <Route
          path="/nombre"
          element={
            <>
              <PantallaNombre />
            </>
          }
        />

        <Route
          path="/seleccion"
          element={
            <>
              <PantallaSeleccion />
            </>
          }
        />

        <Route
          path="/principal"
          element={
            <>
              <PantallaPrincipal />
            </>
          }
        />
      </Routes>
    </PetProvider>
    </>
  );
}

export default App;

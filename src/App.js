import { Routes, Route } from "react-router-dom";
import PantallaInicio from "./Ventanas/PantallaInicio";
import PantallaNombre from "./Ventanas/PantallaNombre";
import PantallaSeleccion from "./Ventanas/PantallaSeleccion";
import PantallaPrincipal from "./Ventanas/PantallaPrincipal";
import BackgroundMusic from "./Components/BackgroundMusic";
import Game from "./Components/Game/Game";
import { PetProvider } from "./Components/PetContext";
import 'bootstrap/dist/css/bootstrap.min.css';

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

          <Route
            path="/game"
            element={
              <>
                <Game />
              </>
            }
          />
        </Routes>
      </PetProvider>
    </>
  );
}

export default App;

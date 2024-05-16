import { Routes, Route } from "react-router-dom";
import PantallaInicio from "./Ventanas/PantallaInicio";
import PantallaNombre from "./Ventanas/PantallaNombre";
import PantallaSeleccion from "./Ventanas/PantallaSeleccion";
import PantallaPrincipal from "./Ventanas/PantallaPrincipal";
import { PetProvider } from "./Components/PetContext";
import "./index.css";

function App() {
  return (
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
  );
}

export default App;

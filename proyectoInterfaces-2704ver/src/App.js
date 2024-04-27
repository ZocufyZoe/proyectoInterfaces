
import {Routes,Route} from "react-router-dom";
import PantallaInicio from "./Ventanas/PantallaInicio";
import PantallaSeleccion from "./Ventanas/PantallaSeleccion";
import PantallaPrincipal from "./Ventanas/PantallaPrincipal";



function App() {

  return (
    <>
    <Routes>
        <Route path='/' 
            element={
                <>
                  <PantallaInicio/>
                </>
           
            }/>
        <Route path='/seleccion' 
            element={

               <>
                   <PantallaSeleccion/>
               </>
            }/>

        <Route path='/principal' 
            element={
               <>
                <PantallaPrincipal/>
               </>
            }/>

    </Routes>    
</>

  );
}

export default App;



import React from "react";
import "./Ayuda.css"; // Asegúrate de tener el archivo de estilos para el componente de Ayuda
import VolverIcon from "../../images/cerrar.png";

function Ayuda({Cerrar}) {
  return (
    <div className="help-popup"
      overlayClassName="help-overlay">
      <div className="help-content">
        <div className="derecha">
          <div className="texto">
            <h2>¿Necesitas ayuda?</h2>
          </div>
          <button className="volver" onClick={Cerrar}>
            <img className="foto" src={VolverIcon}></img>
          </button>
        </div>
        
        <table className="tablaayuda">
          <tr>
              <th className="columnaizquierda"><h4 className="texto">Botones</h4></th>
              <th className="columnaderecha"><h4 className="texto">Funcionalidad</h4></th>
          </tr>
          <tr>
            <td className="texto">Afecto</td>
            <td>
              <p>Pulsa este boton para poder dar cariño a tu pal, clica en el corazon para aumentar su nivel de felicidad </p>
            </td>
          </tr>
          <tr>
            <td className="texto">Comida</td>
            <td>
              <p>Pulsa este boton para desplegar el inventario de comida de tu pal, clica un plato y arrastralo hasta tu Pal para alimentarlo </p>
            </td>
          </tr>
          <tr>
            <td className="texto">Limpieza</td>
            <td>
              <p>Pulsa este boton para ir a la ducha, Arrastra la esponja para limpiar a tu Pal </p>
            </td>
          </tr>
          <tr>
            <td className="texto">Juegos</td>
            <td>
              <p>Pulsa este boton para jugar con tu Pal, selecciona un juego y disfruta </p>
            </td>
          </tr>
          <tr>
            <td className="texto">Tienda</td>
            <td>
              <p>Pulsa este boton para desplegar la tienda de objetos, añade los productos que quieras comprar y paga </p>
            </td>
          </tr>
          <tr>
            <td className="texto">Decoracion</td>
            <td>
              <p>Pulsa este boton para cambiar la ubicacion de tu pal, selecciona una decoracion </p>
            </td>
          </tr>
        </table>
        
        <p>¡Aquí estoy para ayudarte!</p>
        
        {/* Aquí puedes agregar cualquier contenido adicional que desees mostrar en tu pop-up */}
      </div>
    </div>
  );
}

export default Ayuda;
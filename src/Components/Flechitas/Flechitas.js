import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import './Flechitas.css';


function Flechitas({costeTotal, cambiarCosteTotal, productos, modificarProductos, precio, idProducto, cantidadProvisional}) {


    const [value, setValue] = useState(0);
    const minValue = 0;
    const maxValue = 100;

    const updateCantidadProvisional = ( newCantidad) => {
      modificarProductos(productos.map(producto => producto.id === idProducto ? { ...producto, cantidadCarro: newCantidad } : producto));
    };

    const handleDecrease = () => {

        setValue(prevValue => Math.max(prevValue - 1, minValue));
        cambiarCosteTotal(costeTotal-precio);
        updateCantidadProvisional(cantidadProvisional-1);
    };

    const handleIncrease = () => {
        setValue(prevValue => Math.min(prevValue + 1, maxValue));
        cambiarCosteTotal(costeTotal+precio);
        updateCantidadProvisional(cantidadProvisional+1);
    };



    return (
      
      <div className="container-flechita">
                <button
                  className="arrow-button"
                  onClick={handleDecrease}
                  disabled={value <= minValue}
                >
                -
                </button>

                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  min={minValue}
                  max={maxValue}
                />

                <button
                  className="arrow-button"
                  onClick={handleIncrease}
                  disabled={value >= maxValue}
                >
                +
                </button>
        </div>
               
    );
};

export default Flechitas;


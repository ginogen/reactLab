import React from 'react';
import './Carrito.css';




/*En este caso necesitaria usar la variable Producto declarada en Card, en donde dice Producto a comprar:*/


function Carrito(){
    return(
        <div className="Carrito-Card">
            <div className="Detalle-Prod">
                <p>Producto a comprar: </p> 
                
            </div>
            <div className="Costos"></div>
            <div className="Comprar"></div>
        </div>
    )
}

export default Carrito
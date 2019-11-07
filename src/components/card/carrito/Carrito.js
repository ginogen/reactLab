import React from 'react';
import './Carrito.css';
import Card from '../Card.js';






function Carrito(){
    return(
        <div className="Carrito-Card">
            <div className="Detalle-Prod">
                <p>Compra Exitosa </p>
                
            </div>
            <div className="Costos"></div>
            <div className="Comprar"></div>
        </div>
    )
}

export default Carrito
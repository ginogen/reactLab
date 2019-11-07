import React, {useState} from 'react';
import './Card.css';
import Carrito from './carrito/Carrito.js';



function Card(){

    const precio = ['$58,000']
    const producto = ['Monopatin Xiaomi Mi M365 Electrico']

    const[compra, estadoCompra] = useState(0)
    const compraAgregar = () => {
        estadoCompra(compra + 1)
    }
    const compraRestar = () => {
        estadoCompra(compra - 1)
    }
    
     const[carrito, estadoCarrito] = useState(<Card />)
     const finalizarCompra = () => {
         return(estadoCarrito(carrito === <Carrito />))
     }

    return(
        <div className="Card-container">
            <img 
                src='https://comunidadxiaomi.com.ar/wp-content/uploads/2019/09/monopatin-xiaomi-mi-m365-electrico-scooter-30-km-plegable-D_NQ_NP_859536-MLA31736836619_082019-F.jpg'
                className="Card-image"
                alt="test"
            ></img>
            <h3 className="Card-title">{producto}</h3>
            <h4 className="Card-price">{precio}</h4>
            <p className="Card-desc">Exclusivo scooter electrico monopatin ideal para moverse en la ciudad. Una excelente opción para movilidad diaria con la mas alta tecnología del mercado en scooters</p>
            <ul className="Card-list">
                <li>Velocidad máxima: 25 km/h</li>
                <li>Autonomía máxima: 30 kilómetros</li>
                <li>Plegable</li>
                <li>Potencia de la batería: 280Wh</li>
                <li>Tiempo de carga de la batería: 4 horas</li>
            </ul>
            <span className="Card-quant">Cantidad: {compra}</span>
            <button onClick={compraAgregar} className="Card-button-quant">+</button>
            <button onClick={compraRestar} className="Card-button-quant">-</button>
            <button onClick={finalizarCompra} className="Card-button">Agregar al Carrito</button>
            
        </div>
    )
   
}



// -Como se puede optimizar?
// - Pasar data entre componentes?


export default Card;
import React, {useState} from 'react';
import './Card.css';


/* Explicación: lo que quiero hacer es poder utilizar la info de este componente(Card), como ser
precio, producto y la cantidad que seria {compra}, esa info la quiero utilizar en el componente Carrito*/

function Card(props){

    // const precio = ['$58,000']
    // const producto = ['Monopatin Xiaomi Mi M365 Electrico']

    const[compra, estadoCompra] = useState(0)
    const compraAgregar = () => {
        estadoCompra(compra + 1)
    }
    const compraRestar = () => {
        estadoCompra(compra - 1)
    }
    
    //  const[carrito, estadoCarrito] = useState(<Card />)
    //  const finalizarCompra = () => {
    //      return(estadoCarrito(carrito === <Carrito />))
    //  }

    return(
        <div className="Card-container">
            <img 
                src={props.img}
                className="Card-image"
                alt="test"
            ></img>
            <h3 className="Card-title">{props.title}</h3>
            <h4 className="Card-price">{props.price}</h4>
    <p className="Card-desc">{props.description}</p>
            
            <span className="Card-quant">Cantidad: {compra}</span>
            <button onClick={compraAgregar} className="Card-button-quant">+</button>
            <button onClick={compraRestar} className="Card-button-quant">-</button>
            <button className="Card-button">Agregar al Carrito</button>
            
        </div>
    )
   
}



// -Como se puede optimizar?
// - Pasar data entre componentes?


export default Card;
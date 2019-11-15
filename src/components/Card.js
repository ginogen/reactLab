import React, {useState} from 'react';
import './App.css';


/* Explicación: lo que quiero hacer es poder utilizar la info de este componente(Card), como ser
precio, producto y la cantidad que seria {compra}, esa info la quiero utilizar en el componente Carrito*/

function Card(props){


    const[compra, estadoCompra] = useState(0)
    const compraAgregar = () => {
        estadoCompra(compra + 1)
    }
    const compraRestar = () => {
        estadoCompra(compra - 1)
        }
    
     
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

            <Info carro={compra}/>
            <Incrementar agregarUno={compraAgregar}/>
            <Decrementar restarUno={compraRestar}/>
            <AgregarBoton />

        </div>
    )

}

function Incrementar(props){
    
    return(
        <button onClick={props.agregarUno} className="Card-button-quant">+</button>
    )
}
function Decrementar(props){
    
    
    return(
        <button onClick={props.restarUno} className="Card-button-quant">-</button>
    )
}
function Info(props){
    
    return(
        <div>
        <p className="Card-quant">Cantidad: {props.carro}</p>
        </div>
    )
}

function AgregarBoton(props){
    return(
        
        <button  className="Card-button">Agregar al Carrito</button>
    )
}
// -Como se puede optimizar?
// - Pasar data entre componentes?
// - Como renderizar diferentes componentes if?


export default Card;
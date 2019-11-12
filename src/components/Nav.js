import React from 'react';
import './App.css';

function Nav (props){
    return(
        <div className="Nav">
            <h4 style={{color: '#ffffff', display: 'inline', float: 'left', margin: '10px 0px 10px 20px'}}>Carrito de Compra</h4>
            <p style={{color: '#ffffff',display: 'inline', float: 'left', margin: '35px 0px 10px -138px'}}>Producto:</p>
            <p style={{color: '#ffffff',display: 'inline', float: 'right', textAlign:'right', margin: '35px 70px 10px -138px'}}>Total:</p>
        </div>
    )
}

export default Nav
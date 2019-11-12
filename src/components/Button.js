import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Button() {
    return(
        <Link 
            to='./Checkout'
            style={{
                background: '#FF4500',
                width: '20%',
                color: '#FFFFFF',
                fontSize: '12px',
                borderColor: '#FF4500',
                borderStyle: 'solid',
                borderWidth: '2px',
                padding: '10px 40px',
                margin: '15px auto',
                position: 'relative',
                float: 'right',
                cursor: 'pointer',
                textAlign: 'center',
            }}
            
            >
            Finalizar Compra
        </Link>
    )
}

export default Button
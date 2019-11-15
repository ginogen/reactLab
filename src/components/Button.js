import React from 'react';
import './App.css';



function Button() {
    return(
        <button 
            
            style={{
                background: '#FF4500',
                width: '20%',
                color: '#FFFFFF',
                fontSize: '12px',
                borderColor: '#FF4500',
                borderStyle: 'solid',
                borderWidth: '2px',
                padding: '10px 40px',
                margin: '15px 40px 15px 15px',
                position: 'relative',
                float: 'right',
                cursor: 'pointer',
                textAlign: 'center',
            }}
            
            >
            Finalizar Compra
        </button>
    )
}

 export default Button
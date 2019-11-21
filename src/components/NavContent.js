import React from 'react';
import './App.css';


function NavContent(){
    return(
        <div className="Nav-content">
            <img 
                style={{
                    maxWidth: '135px', 
                    maxHeight: '35px', 
                    display: 'flex', 
                    float: 'left', 
                    margin: '10px auto auto 10px'}}
                src="https://upload.wikimedia.org/wikipedia/commons/d/d4/MercadoLibre_logo.PNG"
                alt="mercadolibre"
                ></img>
                <input className="Input-search" type="text" placeholder="Buscar productos, marcas y más..."></input>
            
            <img
                style={{
                    maxWidth:'340px',
                    maxHeight: '39px',
                    verticalAlign: 'baseline',
                    float: 'right',
                    margin: '10px auto',
                }}
                src="https://http2.mlstatic.com/resources/deals/exhibitors_resources/mla-menu-desktop-notification-picture-884e6931-4c64-4187-b239-12417fb09706.png"
                ></img>
        </div>
        
    )
}

export default NavContent
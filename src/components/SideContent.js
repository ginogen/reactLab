import React from 'react';
import './App.css';




function Side(props){
    return(
        <div className="Side-content">
            <span className="info">Nuevo - 399 vendidos</span>
            <h2 className="item-title">Monopatin Xiaomi Mi M365 Electrico</h2>
            <span className="item-price" >$ 58.000</span>
            <span className="item-stock">Stock disponible</span>
            <span className="item-pay">Pagá en hasta 12 cuotas</span>
            <label className="item-label">Con tu VISA terminada en 4958</label>
            <a href="#" className="item-link">Más información</a>
            <span className="item-shipping">Envio $399</span>
            <label className="item-label-shipping">Llega a la sucursal entre el 25 y 27 de Diciembre</label>
            <a href="#" className="item-link">Ver más opciones</a>
            <span className="item-return">Devolución gratis</span>
            <label className="item-label-return">Tenés 30 días desde que lo recibís</label>
            <a href="#" className="item-link">Conocer más</a>
            <select >
                <options value="1">1 Unidad</options>
            </select>
        </div>
    )
}

export default Side
import React from 'react';

import './App.css';
import Card from './Card';
import Carrito from './Carrito';
import Nav from './Nav';
import ProductData from './ProductData';






function App() {

    const Products = ProductData.map(prod => <Card key={prod.id} img={prod.img} title={prod.title} price={prod.price} description={prod.description} />)
    
  return (
    <div className="App">
      <Nav  />
      <div style={{display: 'inline-flex', margin: 'auto', padding:'10px', flexWrap: 'nowrap'}}>
      {Products}
      </div>
      
      
    </div>
  );
}

export default App;

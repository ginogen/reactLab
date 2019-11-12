import React from 'react';

import './App.css';
import Card from './Card';

import Nav from './Nav';
import ProductData from './ProductData';
import Button from './Button';





function App() {

    const Products = ProductData.map(prod => <Card key={prod.id} img={prod.img} title={prod.title} price={prod.price} description={prod.description} />)
    
  return (
    <div className="App">
      <Nav  />
      <div style={{display: 'inline-flex', margin: 'auto', padding:'10px', flexWrap: 'nowrap'}}>
      {Products}
      </div>
      <Button />
      
    </div>
  );
}

export default App;

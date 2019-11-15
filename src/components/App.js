import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Popup from "reactjs-popup";
import './App.css';
import Card from './Card';
import Nav from './Nav';
import ProductData from './ProductData';
import Button from './Button';
import Payment from './Payment';






function App() {

    const Products = ProductData.map(prod => <Card key={prod.id} img={prod.img} title={prod.title} price={prod.price} description={prod.description} />)
    
    

  return (
    <Router>
    <div className="App">
      <Nav  />
      <div style={{display: 'inline-flex', margin: 'auto', padding:'10px', flexWrap: 'nowrap'}}>
      {Products}
      </div>
      <Link to="/Checkout"><Button /></Link> 
      <Switch>
        <Route path="/Checkout" >
        <Checkout />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

function Checkout(){
  return(
    <div style={{
      width:'1290px', 
      height: '200px', 
      boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)', 
      margin:'30px auto', 
      borderTop: 'solid 2px #F44336'}}>
      <Payment /> 
    </div>
  )
}
export default App;

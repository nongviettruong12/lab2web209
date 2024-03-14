import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import Productlist from './components/productlist';
import Footer from './components/footer';
import { Iproduct } from './interface/product';
import { Routes,Route } from 'react-router-dom';
import Client from './layout/client';
import Home from './layout/home';
import ProductDetails from './components/productDetail';
function App() {  
  return (
    <Routes>
      <Route path='/'Component={Client}/>
      <Route path='/product'Component={Productlist}/>
      <Route path='/details/:id'Component={ProductDetails}/>
      <Route path='/home'Component={Home}/>
    </Routes>
  )
}

export default App;

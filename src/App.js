import React, { useState, createContext } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {

  const [category, setCategory] = useState('laptop');

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <Home></Home>
      <Header></Header>
      <Shipment/>
    </CategoryContext.Provider>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Products from './Pages/Products';

function App() {
  const [cardlist, setCardList] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home CrdList={cardlist} SetCrdList={setCardList} />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path = '/product-page/:handle/:id' element = {<Products CrdList={cardlist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

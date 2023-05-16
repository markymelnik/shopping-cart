import React, { useState } from 'react';
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import ShoppingCart from './components/Shopping/ShoppingCart';
import ShopProducts from './components/ShopProducts';

const App = () => {

  const [showCart, setShowCart] = useState(false);
  const [shoppingCartProducts, setShoppingCartProducts] = useState([]);

  const toggleCart = () => {
    setShowCart((hiddenCart) => !hiddenCart);
  };

  const handleAddToCart = (newShoppingCartProduct) => {
    const currentShoppingCartProducts = shoppingCartProducts;
    const updatedShoppingCartProducts = [...currentShoppingCartProducts, newShoppingCartProduct];
    setShoppingCartProducts(updatedShoppingCartProducts);
  }

  return (
    <AppWrapper>
      <BrowserRouter>
        <NavBar toggleCart={toggleCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop handleAddToCart={handleAddToCart} ShopProducts={ShopProducts}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <ShoppingCart 
        onCloseButtonClick={toggleCart} 
        showCart={showCart} 
        shoppingCartProducts={shoppingCartProducts} 
      />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default App;

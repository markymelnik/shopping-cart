import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import ShoppingCart from './components/Shopping/ShoppingCart';
import ShopProducts from './components/ShopProducts';

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [shoppingCartProducts, setShoppingCartProducts] = useState([]);

  const toggleCart = () => {
    setShowCart((hiddenCart) => !hiddenCart);
  };

  const handleAddToCart = (newShoppingCartProduct) => {
    let productInCartExists = false;

    const updatedCurrentProducts = shoppingCartProducts.map((productInCart) => {
      if (productInCart.id === newShoppingCartProduct.id) {
        productInCartExists = true;
        return { ...productInCart, quantity: productInCart.quantity + 1 };
      }
      return productInCart;
    });

    if (productInCartExists) {
      setShoppingCartProducts(updatedCurrentProducts);
    } else {
      setShoppingCartProducts([...updatedCurrentProducts, { ...newShoppingCartProduct, quantity: 1 }]);
    }
  };

  const handleIncrement = (selectedCartProduct) => {
    const updatedCurrentProducts = shoppingCartProducts.map((productInCart) => {
      if (productInCart.id === selectedCartProduct.id) {
        return { ...productInCart, quantity: productInCart.quantity + 1 };
      }
      return productInCart;
    });
    setShoppingCartProducts(updatedCurrentProducts);
  };

  const handleDecrement = (selectedCartProduct) => {
    const updatedCurrentProducts = shoppingCartProducts.map((productInCart) => {
      if (productInCart.id === selectedCartProduct.id && productInCart.quantity > 0) {
        return { ...productInCart, quantity: productInCart.quantity - 1 };
      }
      return productInCart;
    });

    const filteredCurrentProducts = updatedCurrentProducts.filter(
      (productInCart) => productInCart.quantity > 0
    );
    setShoppingCartProducts(filteredCurrentProducts);
  };

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
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
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

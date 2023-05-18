import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Checkout from './components/Checkout';
import ShoppingCart from './components/Shopping/ShoppingCart';
import ShopProducts from './components/ShopProducts';

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [shoppingCartProducts, setShoppingCartProducts] = useState([]);
  const [shoppingCartTitle, setShoppingCartTitle] = useState('Your shopping cart is empty!');

  const toggleCart = () => {
    setShowCart((hiddenCart) => !hiddenCart);
  };

  const handleAddToCart = (newShoppingCartProduct) => {
    let productInCartExists = false;

    const updatedCurrentProducts = shoppingCartProducts.map((productInCart) => {
      if (productInCart.id === newShoppingCartProduct.id) {
        productInCartExists = true;
        return { ...productInCart, quantity: productInCart.quantity + newShoppingCartProduct.quantity };
      }
      return productInCart;
    });

    if (productInCartExists) {
      setShoppingCartProducts(updatedCurrentProducts);
    } else {
      setShoppingCartProducts([...updatedCurrentProducts, { ...newShoppingCartProduct, quantity: newShoppingCartProduct.quantity }]);
    }

    setShoppingCartTitle('Your shopping cart');
  };

  const handleRemoveFromCart = (selectedCartProduct) => {
    
    const filteredCurrentProducts = shoppingCartProducts.filter(
      (productInCart) => productInCart.id !== selectedCartProduct.id
    );
    setShoppingCartProducts(filteredCurrentProducts);

    if (filteredCurrentProducts.length === 0) {
      setShoppingCartTitle('Your shopping cart is empty!');
    }
  }

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

    if (filteredCurrentProducts.length === 0) {
      setShoppingCartTitle('Your shopping cart is empty!');
    }
  };

  const calculateTotalCost = shoppingCartProducts.reduce((totalPrice, currentProduct) => {
    return totalPrice + (currentProduct.price * currentProduct.quantity);
  }, 0);

  return (
    <AppWrapper>
      <DimOverlay data-showcart={showCart} onClick={toggleCart} />
      <BrowserRouter>
        <NavBar 
          toggleCart={toggleCart} 
          totalCost={calculateTotalCost} 
          uniqueProductQuantity={shoppingCartProducts.length}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop handleAddToCart={handleAddToCart} ShopProducts={ShopProducts}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/checkout' element={<Checkout shoppingCartProducts={shoppingCartProducts} totalCost={calculateTotalCost} />} />
        </Routes>
        <ShoppingCart 
          onCloseButtonClick={toggleCart} 
          showCart={showCart} 
          shoppingCartProducts={shoppingCartProducts}
          shoppingCartTitle={shoppingCartTitle} 
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          totalCost={calculateTotalCost}
          removeProduct={handleRemoveFromCart}
      />
      </BrowserRouter>
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DimOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: ${(props) => (props['data-showcart'] ? 'block' : 'none' )};
`

export default App;

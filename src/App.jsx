import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/Navigation/NavBar';
import HomePage from './components/Pages/Home';
import ShopPage from './components/Pages/Shop';
import AboutPage from './components/Pages/About';
import CheckoutPage from './components/Pages/Checkout';
import ShoppingCart from './components/Shopping/ShoppingCart';
import ShopProducts from './utils/ShopProducts';

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [shoppingCartProducts, setShoppingCartProducts] = useState([]);
  const [shoppingCartTitle, setShoppingCartTitle] = useState('Your shopping cart is empty!');

  const toggleCartVisibility = () => {
    setIsCartVisible((hiddenCart) => !hiddenCart);
  };

  const handleAddToCart = (newShoppingCartProduct) => {
    let productInCartExists = false;

    const updatedCurrentProducts = shoppingCartProducts.map((productInCart) => {
      if (productInCart.id === newShoppingCartProduct.id) {
        productInCartExists = true;
        return {
          ...productInCart,
          quantity: productInCart.quantity + newShoppingCartProduct.quantity,
        };
      }
      return productInCart;
    });

    if (productInCartExists) {
      setShoppingCartProducts(updatedCurrentProducts);
    } else {
      setShoppingCartProducts([
        ...updatedCurrentProducts,
        {
          ...newShoppingCartProduct,
          quantity: newShoppingCartProduct.quantity,
        },
      ]);
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
  };

  const handleIncrementProductQuantity = (selectedCartProduct) => {
    const updatedCurrentProducts = shoppingCartProducts.map((productInCart) => {
      if (productInCart.id === selectedCartProduct.id) {
        return { ...productInCart, quantity: productInCart.quantity + 1 };
      }
      return productInCart;
    });
    setShoppingCartProducts(updatedCurrentProducts);
  };

  const handleDecrementProductQuantity = (selectedCartProduct) => {
    const updatedCurrentProducts = shoppingCartProducts.map((productInCart) => {
      if (
        productInCart.id === selectedCartProduct.id &&
        productInCart.quantity > 0
      ) {
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

  const calculateTotalCost = shoppingCartProducts.reduce(
    (totalPrice, currentProduct) => {
      return totalPrice + currentProduct.price * currentProduct.quantity;
    },
    0
  );

  return (
    <MainContainer>
      <DimOverlay data-iscartvisible={isCartVisible} onClick={toggleCartVisibility} />
      <BrowserRouter>
        <NavBar
          toggleCartVisibility={toggleCartVisibility}
          totalCost={calculateTotalCost}
          uniqueProductCount={shoppingCartProducts.length}
        />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/shop'
            element={
              <ShopPage
                handleAddToCart={handleAddToCart}
                ShopProducts={ShopProducts}
              />
            }
          />
          <Route path='/about' element={<AboutPage />} />
          <Route
            path='/checkout'
            element={
              <CheckoutPage
                shoppingCartProducts={shoppingCartProducts}
                totalCost={calculateTotalCost}
              />
            }
          />
        </Routes>
        <ShoppingCart
          isCartVisible={isCartVisible}
          onCloseButtonClick={toggleCartVisibility}
          shoppingCartTitle={shoppingCartTitle}
          shoppingCartProducts={shoppingCartProducts}
          onDecrement={handleDecrementProductQuantity}
          onIncrement={handleIncrementProductQuantity}
          totalCost={calculateTotalCost}
          removeProduct={handleRemoveFromCart}
        />
      </BrowserRouter>
    </MainContainer>
  );
};

const MainContainer = styled.main`
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
  display: ${(props) => (props['data-iscartvisible'] ? 'block' : 'none')};
`;

export default App;

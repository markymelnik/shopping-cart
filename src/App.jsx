import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import colorTheme from './utils/colorTheme';
import NavBar from './components/Navigation/NavBar';
import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';
import About from './components/Pages/About';
import Checkout from './components/Pages/Checkout';
import ProductPreview from './components/Shopping/ProductPreview';
import ShoppingCart from './components/Shopping/ShoppingCart';
import ShopProducts from './components/Shopping/Products';

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [shoppingCartProducts, setShoppingCartProducts] = useState([]);
  const [shoppingCartTitle, setShoppingCartTitle] = useState(
    'Your shopping cart is empty!'
  );

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
    <ThemeProvider theme={colorTheme}>
      <BrowserRouter>
        <MainContainer>
          <DimOverlay
            data-iscartvisible={isCartVisible}
            onClick={toggleCartVisibility}
          />

          <NavBar
            toggleCartVisibility={toggleCartVisibility}
            totalCost={calculateTotalCost}
            uniqueProductCount={shoppingCartProducts.length}
          />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/shop'
              element={
                <Shop
                  handleAddToCart={handleAddToCart}
                  ShopProducts={ShopProducts}
                />
              }
            />
            <Route path='/about' element={<About />} />
            <Route
              path='/checkout'
              element={
                <Checkout
                  shoppingCartProducts={shoppingCartProducts}
                  totalCost={calculateTotalCost}
                />
              }
            />
            <Route
              path='/product/:id'
              element={
                <ProductPreview
                  ShopProducts={ShopProducts}
                  handleAddToCart={handleAddToCart}
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
        </MainContainer>
      </BrowserRouter>
    </ThemeProvider>
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

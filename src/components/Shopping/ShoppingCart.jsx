import styled from 'styled-components';
import CartProduct from './CartProduct';
import { Link } from 'react-router-dom';

const ShoppingCart = ({
  onCloseButtonClick,
  showCart,
  shoppingCartProducts,
  shoppingCartTitle,
  onDecrement,
  onIncrement,
  totalCost,
  removeProduct
}) => {

  return (
    <ShoppingCartContainer data-showcart={showCart}>
      <h2>{shoppingCartTitle}</h2>
      <CloseButton onClick={onCloseButtonClick} data-showcart={showCart}>X</CloseButton>
      <CartProductsContainer>
        {shoppingCartProducts.map((cartProduct) => (
          <CartProduct
            key={cartProduct.id}
            cartProduct={cartProduct}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            removeProduct={removeProduct}
          />
        ))}
      </CartProductsContainer>
      <TotalCartBalance>Subtotal: ${totalCost.toFixed(2)}</TotalCartBalance>
      <CheckoutButton to='/checkout' onClick={onCloseButtonClick}>Checkout</CheckoutButton>
    </ShoppingCartContainer>
  );
};

const ShoppingCartContainer = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  right: ${(props) => (props['data-showcart'] ? '0' : '-500px')};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 25px 10px;
  height: 100vh;
  width: 500px;
  border: 1px solid black;
  background-color: lightgrey;
  transition: right 0.4s ease-in-out;

  @media (max-width: 860px) {
    width: 400px;
  }
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 30px;
  top: 0;
  left: -50px;
  height: 50px;
  width: 50px;
  visibility: ${(props) => (props['data-showcart'] ? 'visible' : 'hidden')};

  &:hover {
    cursor: pointer;
    background-color: #d22b2b;
  }
`;

const CartProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 500px;
  width: 90%;
  border: 1px solid black;
  padding: 10px;
  overflow-y: scroll;
  background-color: white;
`;

const TotalCartBalance = styled.div`
  display: flex;
  font-size: 25px;
`;

const CheckoutButton = styled(Link)`
  display: flex;
  color: black;
  justify-content: center;
  font-size: 25px;
  border: 2px solid black;
  width: 80%;
  padding: 10px;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: gold;

  }
`;

export default ShoppingCart;

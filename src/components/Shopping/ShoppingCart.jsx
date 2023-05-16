import styled from 'styled-components';
import CartProduct from './CartProduct';

const ShoppingCart = ({
  onCloseButtonClick,
  showCart,
  shoppingCartProducts,
  onDecrement,
  onIncrement,
  totalCost,
}) => {
  return (
    <ShoppingCartContainer data-showcart={showCart}>
      <h2>Your Shopping Cart</h2>
      <CloseButton onClick={onCloseButtonClick} data-showcart={showCart}>X</CloseButton>
      <CartProductsContainer>
        {shoppingCartProducts.map((cartProduct) => (
          <CartProduct
            key={cartProduct.id}
            cartProduct={cartProduct}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
          />
        ))}
      </CartProductsContainer>
      <TotalCartBalance>Total: ${totalCost.toFixed(2)}</TotalCartBalance>
      <CheckoutButton>Checkout</CheckoutButton>
    </ShoppingCartContainer>
  );
};

const ShoppingCartContainer = styled.div`
  position: fixed;
  z-index: 1;
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

const CheckoutButton = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  border: 1px solid black;
  width: 80%;
  padding: 10px;
`;

export default ShoppingCart;

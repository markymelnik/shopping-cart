import styled from 'styled-components';
import CartProduct from './CartProduct';
import { Link } from 'react-router-dom';

const ShoppingCart = ({
  isCartVisible,
  onCloseButtonClick,
  shoppingCartTitle,
  shoppingCartProducts,
  onDecrement,
  onIncrement,
  totalCost,
  removeProduct,
}) => {
  return (
    <ShoppingCartContainer data-iscartvisible={isCartVisible}>
      <ShoppingCartTitle>{shoppingCartTitle}</ShoppingCartTitle>
      <CloseButton onClick={onCloseButtonClick} data-iscartvisible={isCartVisible}>
        X
      </CloseButton>
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
      <SubtotalCartBalance>Subtotal: ${totalCost.toFixed(2)}</SubtotalCartBalance>
      <CheckoutButton to='/checkout' onClick={onCloseButtonClick}>
        Checkout
      </CheckoutButton>
    </ShoppingCartContainer>
  );
};

const ShoppingCartContainer = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  right: ${(props) => (props["data-iscartvisible"] ? "0" : "-500px")};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 25px 10px;
  height: 100vh;
  width: 500px;
  border: 1px solid black;
  background-color: ${(props) => props.theme.colors.darker};
  transition: right 0.4s ease-in-out;

  @media (max-width: 860px) {
    width: 400px;
  }
`;

const ShoppingCartTitle = styled.h2`
  color: ${(props) => props.theme.colors.lightest};
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 30px;
  top: 0;
  left: -75px;
  height: 75px;
  width: 75px;
  background: none;
  font-size: 50px;
  color: ${(props) => props.theme.colors.lightest};
  visibility: ${(props) =>
    props["data-iscartvisible"] ? "visible" : "hidden"};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.red};
  }
`;

const CartProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 550px;
  width: 90%;
  border: 1px solid black;
  padding: 10px;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.colors.lightest};
`;

const SubtotalCartBalance = styled.p`
  display: flex;
  font-size: 25px;
  color: ${(props) => props.theme.colors.lightest};
`;

const CheckoutButton = styled(Link)`
  display: flex;
  color: black;
  justify-content: center;
  font-size: 25px;
  border: 2px solid ${(props) => props.theme.colors.lightest};
  color: ${(props) => props.theme.colors.lightest};
  width: 80%;
  padding: 10px;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.green};
  }
`;

export default ShoppingCart;

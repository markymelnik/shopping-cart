import styled from 'styled-components';

const CartButton = ({ onClick }) => {
  return <CartButtonContainer onClick={onClick}>C</CartButtonContainer>;
};

const CartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 50px;
  min-width: 50px;

  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`;

export default CartButton;

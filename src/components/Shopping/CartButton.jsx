import styled from 'styled-components';

const CartButton = ({ onClick, uniqueProductQuantity }) => {
  return (
    <CartButtonContainer onClick={onClick}>
      <CartButtonProductQuantity data-iscartempty={uniqueProductQuantity}>
        {uniqueProductQuantity}
      </CartButtonProductQuantity>
    </CartButtonContainer>
  );
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

const CartButtonProductQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -20px;
  right: -20px;
  border: 1px solid black;
  height: 25px;
  width: 25px;
  background-color: gold;
  visibility: ${(props) =>
    props['data-iscartempty'] < 1 ? 'hidden' : 'visible'};
`;

export default CartButton;

import styled from 'styled-components';

const NavCartButton = ({ onCartButtonClick, uniqueProductCount }) => {
  return (
    <CartButtonContainer onClick={onCartButtonClick}>
      <CartQuantityIndicator data-iscartempty={uniqueProductCount}>
        {uniqueProductCount}
      </CartQuantityIndicator>
    </CartButtonContainer>
  );
};

const CartButtonContainer = styled.button`
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

const CartQuantityIndicator = styled.span`
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

export default NavCartButton;

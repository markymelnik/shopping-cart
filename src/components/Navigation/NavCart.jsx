import styled from 'styled-components';
import cartIcon from '../../assets/icons/shopping-cart-icon.png';

const NavCart = ({ onCartButtonClick, totalCost, uniqueProductCount }) => {
  return (
    <NavCartContainer>
      <TotalCostDisplay>
        <CostHeader>Cart Total:</CostHeader>
        <CostValue>${totalCost.toFixed(2)}</CostValue>
      </TotalCostDisplay>
      <CartButtonContainer onClick={onCartButtonClick}>
        <CartQuantityIndicator data-iscartempty={uniqueProductCount}>
          {uniqueProductCount}
        </CartQuantityIndicator>
      </CartButtonContainer>
    </NavCartContainer>
  );
};

const NavCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 15%;
  gap: 25px;
  margin-right: 50px;

  @media (max-width: 860px) {
    gap: 5px;
  }
`;

const TotalCostDisplay = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

const CostHeader = styled.div`
  color: ${(props) => props.theme.colors.lightest};
`;

const CostValue = styled.div`
  color: ${(props) => props.theme.colors.green};
`;

const CartButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkest};
  background-image: url(${cartIcon});
  background-repeat: no-repeat;
  background-position: center;
  min-height: 50px;
  min-width: 50px;
  transition: transform 0.1s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightsand};
    cursor: pointer;
    transform: rotate(-10deg);
  }
`;

const CartQuantityIndicator = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -20px;
  right: -20px;
  border: 1px solid ${(props) => props.theme.colors.lightest};
  height: 25px;
  width: 25px;
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.lightest};
  visibility: ${(props) =>
    props['data-iscartempty'] < 1 ? 'hidden' : 'visible'};
`;

export default NavCart;

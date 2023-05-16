import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Title from './components/Title';
import CartButton from './components/Shopping/CartButton';

const NavBar = ({ toggleCart, totalCost }) => {
  return (
    <NavWrapper>
      <LeftNavWrapper>
        <Title />
      </LeftNavWrapper>
      <RightNavWrapper>
        <NavButtonsWrapper>
          <StyledNavLink to='/'>Home</StyledNavLink>
          <StyledNavLink to='/shop'>Shop</StyledNavLink>
          <StyledNavLink to='/about'>About</StyledNavLink>
        </NavButtonsWrapper>
        <NavCartWrapper>
          <TotalCostContainer>
            Total: ${totalCost.toFixed(2)}
          </TotalCostContainer>
          <CartButton onClick={toggleCart} />
        </NavCartWrapper>
      </RightNavWrapper>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100%;
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const LeftNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  margin-right: 60px;
  width: 50%;

  @media (max-width: 860px) {
    gap: 20px;
  }
`;

const NavButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 275px;

  @media (max-width: 860px) {
    gap: 10px;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 25px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;

  &:hover {
    border-bottom-color: currentColor;
  }

  &:active,
  &:visited {
    color: #000;
  }

  &.active {
    color: #e04b2b;
  }

  @media (max-width: 860px) {
    font-size: 20px;
  }
`;

const NavCartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 200px;

  @media (max-width: 860px) {
    gap: 5px;
  }
`;

const TotalCostContainer = styled.div`
  font-size: 20px;
`;

export default NavBar;

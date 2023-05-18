import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import NavTitle from './NavTitle';
import NavCartButton from './NavCartButton';

const NavBar = ({ toggleCartVisibility, totalCost, uniqueProductCount }) => {
  return (
    <NavBarContainer>
      <NavLogoContainer>
        <NavTitle />
      </NavLogoContainer>
      <NavItemsContainer>
        <NavLinkContainer>
          <StyledNavLink to='/'>Home</StyledNavLink>
          <StyledNavLink to='/shop'>Shop</StyledNavLink>
          <StyledNavLink to='/about'>About</StyledNavLink>
        </NavLinkContainer>
        <NavCartContainer>
          <TotalCostDisplay>
            Cart Total: ${totalCost.toFixed(2)}
          </TotalCostDisplay>
          <NavCartButton
            onCartButtonClick={toggleCartVisibility}
            uniqueProductCount={uniqueProductCount}
          />
        </NavCartContainer>
      </NavItemsContainer>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
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

const NavLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItemsContainer = styled.div`
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

const NavLinkContainer = styled.div`
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

const NavCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  gap: 20px;

  @media (max-width: 860px) {
    gap: 5px;
  }
`;

const TotalCostDisplay = styled.p`
  font-size: 20px;
`;

export default NavBar;

import styled from "styled-components";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavCart from "./NavCart";

const NavBar = ({ toggleCartVisibility, totalCost, uniqueProductCount }) => {
  return (
    <NavBarContainer>
      <NavLogo />
      <NavLinks />
      <NavCart
        onCartButtonClick={toggleCartVisibility}
        totalCost={totalCost}
        uniqueProductCount={uniqueProductCount}
      />
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.colors.lighter};
  background-color: ${(props) => props.theme.colors.darkest};
  position: sticky;
  top: 0;
  z-index: 1;
`;

export default NavBar;

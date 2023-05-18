import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <NavLinkContainer>
      <NavPageLink to="/">Home</NavPageLink>
      <NavPageLink to="/shop">Shop</NavPageLink>
      <NavPageLink to="/about">About</NavPageLink>
    </NavLinkContainer>
  );
};

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  gap: 40px;

  @media (max-width: 860px) {
    gap: 10px;
    font-size: 18px;
  }
`;

const NavPageLink = styled(NavLink)`
  font-size: 25px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: transform 0.2s ease, border-color 0.2s ease, color 0.1s ease;

  &:hover {
    border-bottom-color: currentColor;
  }

  &:active,
  &:visited {
    color: ${(props) => props.theme.colors.lightest};
  }

  &.active {
    color: ${(props) => props.theme.colors.green};
  }

  @media (max-width: 860px) {
    font-size: 20px;
  }
`;

export default NavLinks;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Title from './components/Title';

const NavBar = () => {
  return (
    <NavWrapper>
      <Title />
      <NavButtonsWrapper>
        <StyledNavLink to='/'>Home</StyledNavLink>
        <StyledNavLink to='/shop'>Shop</StyledNavLink>
        <StyledNavLink to='/about'>About</StyledNavLink>
      </NavButtonsWrapper>
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
`;

const NavButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-right: 40px;
  width: 250px;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 20px;
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
`;

export default NavBar;

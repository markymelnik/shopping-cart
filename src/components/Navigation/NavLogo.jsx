import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
    <NavLogoContainer>
      <Logo to="/">FL</Logo>
    </NavLogoContainer>
  );
};

const NavLogoContainer = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 15%;
  margin-left: 30px;
`;

const Logo = styled(Link)`
  font-size: 40px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.lightest};
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: rotate(-10deg) scale(1.1);
    color: ${(props) => props.theme.colors.green};
  }

  &:active {
    transform: scale(0.9);
  }

  @media (max-width: 860px) {
    font-size: 30px;
  }
`;

export default NavLogo;

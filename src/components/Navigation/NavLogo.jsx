import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
    <NavLogoContainer>
      <Logo to="/">FL</Logo>
    </NavLogoContainer>
  );
};

const NavLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 15%;
  margin-left: 30px;
  height: 50px;
`;

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.lightest};
  transition: transform 0.2s ease, color 0.2s ease;
  height: 50px;
  width: 60px;

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

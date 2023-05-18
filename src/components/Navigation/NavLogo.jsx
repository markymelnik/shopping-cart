import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
    <NavLogoWrapper>
      <Logo to='/'>FL</Logo>
    </NavLogoWrapper>
  );
};

const NavLogoWrapper = styled.h1`
  display: flex;
  justify-content: center;
  margin-left: 60px;
`;

const Logo = styled(Link)`
  font-size: 40px;
  text-decoration: none;
  color: black;

  @media (max-width: 860px) {
    margin: 20px;
  }
`;

export default NavLogo;
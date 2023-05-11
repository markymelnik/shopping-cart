import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "./components/Name";

const NavBar = () => {
  return (
    <NavWrapper>
      <Header />
      <NavButtons>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </NavButtons>
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

const NavButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 40px;
`;

export default NavBar;

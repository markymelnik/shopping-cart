import styled from 'styled-components';

const NavTitle = () => {
  return (
    <NavTitleWrapper>
      <h1>Shopping Cart</h1>
    </NavTitleWrapper>
  );
};

const NavTitleWrapper = styled.header`
  display: flex;
  justify-content: center;
  margin-left: 40px;

  @media (max-width: 860px) {
    font-size: 15px;
    text-align: center;
    margin: 10px;
  }
`;

export default NavTitle;
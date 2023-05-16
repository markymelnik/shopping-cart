import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <HomePageWrapper>
        <WelcomeWrapper>
          <h1> Welcome to the store.</h1>
          <h2>Click below to view our products.</h2>
          <StyledLink to="/shop">Products</StyledLink>
        </WelcomeWrapper>
      </HomePageWrapper>
    </>
  );
};

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;

  & > :nth-child(1) {
    font-size: 50px;
    margin-bottom: 20px;
  }

  & > :nth-child(2) {
    margin-bottom: 50px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 30px;
  border: 2px solid black;
  border-radius: 25px;
  width: 200px;
  height: 60px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #e04b2b;
    color: white;
    cursor: pointer;
  }
`;

export default Home;

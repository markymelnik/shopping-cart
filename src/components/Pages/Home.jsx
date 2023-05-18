import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <HomeContainer>
      <WelcomeSection>
        <WelcomeTitle> Welcome to the store.</WelcomeTitle>
        <WelcomeSubtitle>Click below to view our products.</WelcomeSubtitle>
        <ShopLink to='/shop'>Products</ShopLink>
      </WelcomeSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
`;

const WelcomeTitle = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

const WelcomeSubtitle = styled.h2`
  margin-bottom: 50px;
`;

const ShopLink = styled(Link)`
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

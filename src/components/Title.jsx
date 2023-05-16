import styled from 'styled-components';

const Title = () => {
  return (
    <TitleWrapper>
      <h1>Shopping Cart</h1>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 40px;

  @media (max-width: 860px) {
    font-size: 15px;
    text-align: center;
    margin: 10px;
  }
`;

export default Title;
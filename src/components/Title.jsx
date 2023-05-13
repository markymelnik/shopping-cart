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
`;

export default Title;
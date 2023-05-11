import styled from 'styled-components';

const Name = () => {
  return (
    <NameWrapper>
      <h1>Shopping Cart</h1>
    </NameWrapper>
  );
};

const NameWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 40px;
`;

export default Name;
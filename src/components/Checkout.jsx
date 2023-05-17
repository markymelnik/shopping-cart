import styled from 'styled-components';

const Checkout = ({ shoppingCartProducts, totalCost }) => {
  return (
    <CheckoutContainer>
      <h2>Checkout</h2>
      <TotalCheckoutBalance>Total: ${totalCost.toFixed(2)}</TotalCheckoutBalance>
    </CheckoutContainer>
  )
};

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  margin-top: 50px;
  gap: 100px;
  height: 90vh;
`;

const TotalCheckoutBalance = styled.div`
  display: flex;
  font-size: 25px;
`;

export default Checkout;
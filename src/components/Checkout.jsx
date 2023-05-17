import styled from 'styled-components';

const Checkout = ({ shoppingCartProducts, totalCost }) => {

  const nycSalesTaxRate = 8.875;

  const totalCostWithTax = () => {
    const taxAmount = totalCost * (nycSalesTaxRate / 100);
    return (totalCost + taxAmount).toFixed(2);
  };


  return (
    <CheckoutContainer>
      <h2>Checkout</h2>
      <BalanceContainer>
        <BalanceField> Subtotal: ${totalCost.toFixed(2)}</BalanceField>
        <BalanceField>Sales Tax: {nycSalesTaxRate}%</BalanceField>
        <BalanceField>Total: ${totalCostWithTax()}</BalanceField>
      </BalanceContainer>
    </CheckoutContainer>
  )
};

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  padding-top: 50px;
  height: 90vh;
  gap: 50px;
`;

const BalanceContainer = styled.div`
  
  font-size: 20px;
  
  & > :nth-child(3) {
    margin-top: 20px;
  }
`
const BalanceField = styled.div`
  
`

export default Checkout;
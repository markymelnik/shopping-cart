import styled from 'styled-components';
import totalCostWithSalesTax from '../../utils/SalesTax';

const Checkout = ({ shoppingCartProducts, totalCost }) => {
  const nycSalesTaxRate = 8.875;

  return (
    <CheckoutContainer>
      <CheckoutHeader>Checkout</CheckoutHeader>
      <BalanceContainer>
        <BalanceField> Subtotal: ${totalCost.toFixed(2)}</BalanceField>
        <BalanceField>Sales Tax: {nycSalesTaxRate}%</BalanceField>
        <BalanceField>
          Total: ${totalCostWithSalesTax(totalCost, nycSalesTaxRate)}
        </BalanceField>
      </BalanceContainer>
    </CheckoutContainer>
  );
};

const CheckoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
  height: 88vh;
  gap: 50px;
  background-color: ${(props) => props.theme.colors.darkest};
  letter-spacing: 1px;
`;

const CheckoutHeader = styled.h2`
  font-size: 50px;
  color: ${(props) => props.theme.colors.lightest};
`;

const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  list-style-type: none;
  gap: 10px;

  & > :nth-child(3) {
    margin-top: 20px;
  }
`;

const BalanceField = styled.div`
  color: ${(props) => props.theme.colors.lightest};
`;

export default Checkout;

import styled from 'styled-components';

const CartProduct = ({
  cartProduct,
  onDecrement,
  onIncrement,
  removeProduct,
}) => {
  const { name, price, image, quantity } = cartProduct;

  return (
    <CartProductContainer>
      <CartProductWrapper>
        <CartProductImage src={image} alt={name}></CartProductImage>
        <CartProductInfo>
          <h3>{name}</h3>
          <h3>Price: ${price.toFixed(2)}</h3>
          <h3>Product Total: ${(price * quantity).toFixed(2)}</h3>
        </CartProductInfo>
      </CartProductWrapper>
      <CartProductQuantityContainer>
        <DecrementButton onClick={() => onDecrement(cartProduct)} data-quantitycheck={quantity}>
          -
        </DecrementButton>
        <ProductQuantity>{quantity}</ProductQuantity>
        <IncrementButton onClick={() => onIncrement(cartProduct)}>
          +
        </IncrementButton>
      </CartProductQuantityContainer>
      <CartProductRemoveButton onClick={() => removeProduct(cartProduct)}>
        Remove
      </CartProductRemoveButton>
    </CartProductContainer>
  );
};

const CartProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  min-height: 200px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.lighter};
  }
`;

const CartProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 50px;
`;

const CartProductImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 125px;
  width: 125px;
  border: 1px solid black;
  background-color: ${(props) => props.theme.colors.lightest};
`;

const CartProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 175px;
  gap: 10px;
  color: ${(props) => props.theme.colors.darkest};
`;

const CartProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProductQuantity = styled.span`
  font-size: 25px;
`;

const DecrementButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border: 1px solid black;
  transition: background-color 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.red};
`;

const IncrementButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border: 1px solid black;
  transition: background-color 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.green};
  }
`;

const CartProductRemoveButton = styled.button`
  display: flex;
  color: ${(props) => props.theme.colors.lightest};
  font-size: 15px;
  padding: 5px;
  background-color: ${(props) => props.theme.colors.lighter};
  transition: background-color 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.red};
  }
`;

export default CartProduct;

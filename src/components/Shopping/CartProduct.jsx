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
        <CartProductImage>
          <img src={image} alt={name} />
        </CartProductImage>
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
      <CartProductDeleteButton onClick={() => removeProduct(cartProduct)}>
        Remove
      </CartProductDeleteButton>
    </CartProductContainer>
  );
};

const CartProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  min-height: 175px;
  width: 100%;
`;

const CartProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 50px;
`;

const CartProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border: 1px solid black;
`;

const CartProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 175px;
  gap: 10px;
`;

const CartProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProductQuantity = styled.span`
  font-size: 25px;
`;

const IncrementButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border: 1px solid black;

  &:hover {
    cursor: pointer;
    background-color: lightgrey;
  }
`;

const DecrementButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border: 1px solid black;

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props['data-quantitycheck'] === 1 ? 'red' : 'lightgrey'};
  }
`;

const CartProductDeleteButton = styled.button`
  display: flex;
  color: red;

  &:hover {
    cursor: pointer;
    background-color: salmon;
  }
`;

export default CartProduct;
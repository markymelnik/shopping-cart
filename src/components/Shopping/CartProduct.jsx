import styled from 'styled-components';

const CartProduct = ({ cartProduct, onDecrement, onIncrement }) => {
  const { name, price, image, quantity } = cartProduct;

  return (
    <CartProductContainer>
      <CartProductWrapper>
        <CartProductImage>
          <img src={image} alt={name} />
        </CartProductImage>
        <CartProductInfo>
          <h3>{name}</h3>
          <h3>${price.toFixed(2)}</h3>
        </CartProductInfo>
      </CartProductWrapper>
      <CartProductQuantityContainer>
        <DecrementButton onClick={() => onDecrement(cartProduct)}>-</DecrementButton>
        <ProductQuantity>{quantity}</ProductQuantity>
        <IncrementButton onClick={() => onIncrement(cartProduct)}>+</IncrementButton>
      </CartProductQuantityContainer>
    </CartProductContainer>
  );
};

const CartProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  min-height: 150px;
  width: 100%;
`;

const CartProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
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
  gap: 10px;
`;

const CartProductQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProductQuantity = styled.div`
  font-size: 25px;
`;

const IncrementButton = styled.div`
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

const DecrementButton = styled.div`
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

export default CartProduct;
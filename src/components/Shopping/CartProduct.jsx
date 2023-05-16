import styled from 'styled-components';

const CartProduct = ({ cartProduct }) => {

  const { name, price, image, quantity } = cartProduct;

  return (
    <CartProductContainer>
      <CartProductWrapper>
        <CartProductImage>
          <img src={image} alt={name} />
        </CartProductImage>
        <CartProductInfo>
          <h3>{name}</h3>
          <h3>${price}</h3>
        </CartProductInfo>
      </CartProductWrapper>
      <ProductQuantity>
        {quantity}
      </ProductQuantity>
    </CartProductContainer>
  )
}

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
`

const CartProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border: 1px solid black;
`

const CartProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ProductQuantity = styled.div`
  font-size: 25px;
`

export default CartProduct;
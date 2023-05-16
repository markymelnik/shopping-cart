import styled from 'styled-components';

const CartProduct = ({ product }) => {

  const { name, price, image } = product;

  return (
    <CartProductContainer>
      <CartProductImage>
        <img src={image} alt={name} />
      </CartProductImage>
      <CartProductInfo>
        <h3>{name}</h3>
        <h3>&{price}</h3>
      </CartProductInfo>
      
    </CartProductContainer>
  )
}

const CartProductContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  min-height: 150px;
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
export default CartProduct;
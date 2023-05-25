import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';

const ShopProduct = ({ shopProduct, handleAddToCart }) => {

  const { name, price, image } = shopProduct;

  return (
    <ShopProductContainer >
      <LinkToPreviewPage to={`/product/${shopProduct.id}`}>
        <ShopProductImage src={image} alt={name} ></ShopProductImage>
      </LinkToPreviewPage>
      <ShopProductInfo>
        <ShopProductName>{name}</ShopProductName>
        <ShopProductPrice>${price.toFixed(2)}</ShopProductPrice>
      </ShopProductInfo>
      <AddToCart handleAddToCart={handleAddToCart} shopProduct={shopProduct} />
    </ShopProductContainer>
  );
};


const ShopProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 450px;
  width: 300px;
`

const LinkToPreviewPage = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 80%;
  text-decoration: none;
  color: ${(props) => props.theme.colors.darkest};
`

const ShopProductImage = styled.img`
  height: 100%;
  width: 100%;
  border: 2px solid ${(props) => props.theme.colors.darker};
  border-radius: 15px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const ShopProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 20%;
  color: ${(props) => props.theme.colors.darkest};
  letter-spacing: 1px;
  
`;

const ShopProductName = styled.h4`
  font-size: 18px;
`
const ShopProductPrice = styled.h4`
  font-size: 15px;
`

export default ShopProduct;

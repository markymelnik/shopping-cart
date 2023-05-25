import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import AddToCart from './AddToCart';
import ReturnToShop from './ReturnToShop';

const ProductPreview = ({ ShopProducts, handleAddToCart }) => {

  let { id }= useParams();

  const shopProduct = ShopProducts.find(shopProduct => shopProduct.id === parseInt(id));

  if (!shopProduct) return <h2>Product Not Found!</h2>

  const { name, price, image } = shopProduct;

  return (
    <ProductPreviewContainer>
      <ProductPreviewHeader>Product Preview</ProductPreviewHeader>
      <ProductContainer>
        <ProductImage src={image} alt={name}></ProductImage>
        <ProductPreviewSideBar>
          <ProductInfoContainer>
            <ProductName>{name}</ProductName>
            <ProductPrice>${price.toFixed(2)}</ProductPrice>
          </ProductInfoContainer>
          <AddToCart handleAddToCart={handleAddToCart} shopProduct={shopProduct} />
        </ProductPreviewSideBar>
      </ProductContainer>
      <ReturnToShop/>
    </ProductPreviewContainer>
  )
}

const ProductPreviewContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  min-height: 90vh;
  padding-top: 40px;
  background-color: ${(props) => props.theme.colors.lightest};
`

const ProductPreviewHeader = styled.h2`
  font-size: 30px;
  color: ${(props) => props.theme.colors.darkest};
`

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  width: 80%;
`

const ProductImage = styled.img`
  height: 400px;
  width: 400px;
  border: 2px solid ${(props) => props.theme.colors.darkest};
  border-radius: 15px;
`

const ProductPreviewSideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 40px;
`

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProductName = styled.div`
  font-size: 20px;
`

const ProductPrice = styled.div`
  font-size: 22px;
`

export default ProductPreview;

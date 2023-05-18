import styled from 'styled-components';
import Card from '../Shopping/ShopProduct';

const Shop = ({ handleAddToCart, ShopProducts }) => {
  return (
    <ShopContainer>
      <ShopProductsGrid>
        {ShopProducts.map((shopProduct) => {
          return (
            <Card
              key={shopProduct.id}
              shopProduct={shopProduct}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </ShopProductsGrid>
    </ShopContainer>
  );
};

const ShopContainer = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const ShopProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4em;
  margin: 4em 0;

  @media (max-width: 1380px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Shop;

import styled from 'styled-components';
import Card from './Card';

const Shop = ({ handleAddToCart, ShopProducts }) => {
  return (
    <ShopWrapper>
      <ShopGrid>
        {ShopProducts.map((shopProduct) => {
          return (
            <Card 
              key={shopProduct.id} 
              shopProduct={shopProduct}
              handleAddToCart={handleAddToCart} 
            />
          )
        })}
      </ShopGrid>
    </ShopWrapper>
  )
};

const ShopWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const ShopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4em;
  margin: 4em 0;

  @media(max-width: 1380px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 920px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Shop;

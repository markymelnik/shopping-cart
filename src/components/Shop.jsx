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
              handleAddToCart={() => handleAddToCart(shopProduct)} 
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

`
const ShopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4em;
  margin: 4em 0;
`

export default Shop;

import styled from 'styled-components';
import Card from './Card';
import products from './ProductList';

const Shop = () => {
  return (
    <ShopWrapper>
      <ShopGrid>
        {products.map((product) => {
          return (
            <Card key={product.id} product={product} />
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

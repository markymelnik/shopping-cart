import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const Shop = () => {

  const [itemCount, setItemCount] = useState(10);

  const displayItems = () => {
    const items = [];

    for (let i = 0; i < itemCount; i++) {
      items.push(<Card key={i} />);
    }

    return items;
  }

  return (
    <ShopWrapper>
      <ShopGrid>
        {displayItems()}
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

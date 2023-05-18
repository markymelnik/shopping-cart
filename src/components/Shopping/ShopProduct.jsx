import React, { useState } from 'react';
import styled from 'styled-components';

const ShopProduct = ({ shopProduct, handleAddToCart }) => {
  const { name, price, image } = shopProduct;

  const [quantity, setQuantity] = useState(1);

  const onSelectProductQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <ShopProductContainer>
      <ShopProductImage>
        <img src={image} alt={name} />
      </ShopProductImage>
      <ShopProductInfo>
        <h4>{name}</h4>
        <h4>${price.toFixed(2)}</h4>
        <AddToCartContainer>
          <SelectQuantity onChange={onSelectProductQuantity}>
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </SelectQuantity>
          <AddToCartButton
            onClick={() => handleAddToCart({ ...shopProduct, quantity })}
          >
            Add to Cart
          </AddToCartButton>
        </AddToCartContainer>
      </ShopProductInfo>
    </ShopProductContainer>
  );
};

const ShopProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 450px;
  width: 350px;
  background-color: ${(props) => props.theme.colors.darker};
  border: 4px solid ${(props) => props.theme.colors.lightest};
`;

const ShopProductImage = styled.div`
  height: 60%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.lighter};
`;

const ShopProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 40%;
  width: 100%;
  color: ${(props) => props.theme.colors.lightest};
  letter-spacing: 1px;
`;

const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.lightest};
  text-align: center;
  width: 140px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.darker};
  color: ${(props) => props.theme.colors.lightest};
  transition: background-color 0.1s ease, transform 0.1s ease;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.green};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const AddToCartContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
`;

const SelectQuantity = styled.select`
  margin-left: 10px;
  height: 50px;
  width: 60px;
  color: ${(props) => props.theme.colors.lightest};
  background-color: ${(props) => props.theme.colors.darker};
  border: 2px solid ${(props) => props.theme.colors.lightest};
  transition: background-color 0.2s ease;

  &:hover {
    cursor: pointer;
  }
`;

export default ShopProduct;

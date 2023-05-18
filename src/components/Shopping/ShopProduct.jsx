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
  border: 1px solid black;
  padding: 10px;
`;

const ShopProductImage = styled.div`
  border: 1px solid black;
  height: 60%;
  width: 100%;
`;

const ShopProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  height: 40%;
  width: 100%;
`;

const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  text-align: center;
  width: 120px;
  height: 50px;

  &:hover {
    cursor: pointer;
    background-color: lightgrey;
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
  background-color: white;
  border: 1px solid black;
`;

export default ShopProduct;
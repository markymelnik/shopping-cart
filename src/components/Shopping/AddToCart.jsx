import React, { useState } from 'react';
import styled from 'styled-components';

const AddToCart = ({ handleAddToCart, shopProduct }) => {

  const [quantity, setQuantity] = useState(1);

  const onSelectProductQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
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
  )
}

const AddToCartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
`;

const SelectQuantity = styled.select`
  height: 40px;
  width: 50px;
  font-size: 15px;
  color: ${(props) => props.theme.colors.darkest};
  background-color: ${(props) => props.theme.colors.lightest};
  border: 2px solid ${(props) => props.theme.colors.darkest};
  transition: background-color 0.2s ease;

  &:hover {
    cursor: pointer;
  }
`;

const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.theme.colors.darker};
  text-align: center;
  width: 140px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.lightest};
  color: ${(props) => props.theme.colors.darkest};
  transition: background-color 0.1s ease, transform 0.1s ease;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.green};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default AddToCart;


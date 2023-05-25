import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ReturnToShop = () => {
    return <ReturnToShopLink to='/shop'>Return to Shop</ReturnToShopLink>
}

const ReturnToShopLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border: 1px solid black;
  text-decoration: none;
  font-size: 20px;
  color: ${(props) => props.theme.colors.darkest};
  border: 2px solid ${(props) => props.theme.colors.darkest};
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.lightest};
  }
`

export default ReturnToShop;
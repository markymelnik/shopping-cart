import styled from 'styled-components';

const Card = () => {

  return (
    <CardContainer>
      <CardImage>
        <></>
      </CardImage>
      <CardInfo>
        <h4>Product Name</h4>
        <h4>Product Price</h4>
        <CardButton>Add to Cart</CardButton>
      </CardInfo>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 450px;
  width: 350px;
  border: 1px solid black;
  padding: 10px;
`

const CardImage = styled.div`
  border: 1px solid black;
  height: 60%;
  width: 100%;

`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  height: 40%;
  width: 100%;
`

const CardButton = styled.div`
  border: 1px solid black;
  text-align: center;
  width: 50%;

  &:hover {
    cursor: pointer;
    background-color: lightgrey;
  }
`
export default Card;
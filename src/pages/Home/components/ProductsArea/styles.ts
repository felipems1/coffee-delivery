import { styled } from 'styled-components'

export const ProductsContainer = styled.div`
  width: 100%;
`

export const Title = styled.h1`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2';
  font-size: 32px;
  font-weight: 800;
  line-height: 130%;
`

export const AreaProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;
  padding: 10px 0;
`

export const Product = styled.div`
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};
  width: 230px;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  margin-top: 50px;
`

export const ProductImage = styled.img`
  width: 120px;
  height: 120px;
  margin-top: -50px;
`

export const ProductTitle = styled.h1`
  color: ${(props) => props.theme['base-subtitle']};
  text-align: center;
  margin-top: 25px;
  font-family: 'Baloo 2';
  font-size: 20px;
  font-weight: 700;
  line-height: 130%;
`

export const ProductDescription = styled.p`
  color: ${(props) => props.theme['base-label']};
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 130%;
`

export const ProductAreaPrice = styled.div`
  display: flex;
  width: 208px;
  justify-content: space-around;
  align-items: center;
  margin-top: 33px;
`

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${(props) => props.theme['base-text']};

  span:first-of-type {
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
  }

  span:nth-of-type(2) {
    font-family: 'Baloo 2';
    font-size: 24px;
    font-weight: 800;
    line-height: 130%;
  }
`

export const Cart = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.white};
  }
`

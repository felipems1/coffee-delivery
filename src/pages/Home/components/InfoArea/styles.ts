import { styled } from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 120px);
`

export const CoffeeImg = styled.img`
  margin-top: -100px;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const Info = styled.div`
  flex: 1;
  margin-top: -100px;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2';
    font-size: 48px;
    font-weight: 800;
    line-height: 130%;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 20px;
    font-weight: 400;
    line-height: 130%;
    margin-top: 16px;
  }

  @media (max-width: 1024px) {
    margin-top: -250px;
  }

  @media (max-width: 760px) {
    h1 {
      font-size: 28px;
    }
  }
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 36px;
  height: 84px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  h3 {
    color: ${(props) => props.theme['base-text']};
    font-size: 15px;
    font-weight: 400;
    line-height: 130%;
  }
`

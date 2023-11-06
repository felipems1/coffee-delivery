import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 32px 160px;
  height: 120px;
  justify-content: space-between;
  align-items: center;

  img {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    padding: 60px;
  }

  @media (max-width: 760px) {
    padding: 20px;
  }
`

export const HeaderInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const LocalContent = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-light']};

  svg {
    width: 22px;
    height: 22px;
    color: ${(props) => props.theme.purple};
  }

  h1 {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 14px;
    font-weight: 400;
  }
`

export const CartArea = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-light']};
  cursor: pointer;
  position: relative;

  svg {
    width: 22px;
    height: 22px;
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CartCounter = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -8.345px;
  top: -8px;
  border-radius: 1000px;
  background: ${(props) => props.theme['yellow-dark']};

  color: ${(props) => props.theme.white};
  text-align: center;
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
`

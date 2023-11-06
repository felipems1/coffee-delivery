import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  width: 448px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  @media (max-width: 1024px) {
    width: 640px;
  }

  @media (max-width: 760px) {
    width: 100%;
    padding: 30px 15px;
  }
`

export const CoffeeArea = styled.div`
  display: flex;
  padding: 8px 4px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  padding-bottom: 28px;
  border-bottom: 2px solid ${(props) => props.theme['base-button']};
`

export const CoffeeImg = styled.img`
  display: flex;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
`

export const CoffeeTitle = styled.h3`
  color: ${(props) => props.theme['base-subtitle']};

  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`

export const CoffeePrice = styled.span`
  color: ${(props) => props.theme['base-text']};
  text-align: right;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`

export const ButtonRemove = styled.button`
  display: flex;
  height: 32px;
  padding: 0px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  border: none;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme.purple};
  }

  span {
    color: ${(props) => props.theme['base-text']};

    font-family: 'Roboto';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

export const CoffeeButtons = styled.div`
  display: flex;
  gap: 8px;
`

export const PaymentInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`

export const PaymentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  span,
  strong {
    line-height: 130%;
    text-align: right;
    font-family: 'Roboto';
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }

  strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
`

export const ButtonFinish = styled.button`
  display: flex;
  padding: 12px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  border: none;
  cursor: pointer;

  color: ${(props) => props.theme.white};
  font-family: 'Roboto';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
`

export const IsNoCartProducts = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

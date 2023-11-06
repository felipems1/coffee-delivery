import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
  width: 640px;
  margin-top: 12px;
  margin-bottom: 12px;

  @media (max-width: 760px) {
    width: 100%;
    padding: 30px 15px;
  }
`
export const PaymentHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  svg {
    width: 22px;
    height: 22px;
    color: ${(props) => props.theme.purple};
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;

  @media (max-width: 760px) {
    flex-direction: column;
  }
`

interface PaymentOptionProps {
  $payment: boolean
}

export const PaymentOption = styled.label<PaymentOptionProps>`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  border-radius: 6px;
  border: 1px solid
    ${(props) => (props.$payment ? props.theme.purple : 'transparent')};
  cursor: pointer;
  background: ${(props) => props.theme['base-button']};

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  input {
    display: none;
  }

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

  @media (max-width: 760px) {
    width: 100%;
  }
`

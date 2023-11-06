import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  max-width: 100vw;
  padding: 0px 160px;
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px) {
    padding: 60px;
    flex-direction: column;
  }

  @media (max-width: 760px) {
    padding: 20px;
  }
`

export const DeliveryArea = styled.div``

export const CartArea = styled.div``

export const Title = styled.h2`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 15px;
`

import styled from 'styled-components'

export const DeliveryFinishContainer = styled.div`
  max-width: 100vw;
  padding: 0px 160px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    padding: 60px;
  }

  @media (max-width: 760px) {
    padding: 20px;
  }
`

export const DeliveryTitle = styled.h2`
  color: ${(props) => props.theme['yellow-dark']};

  font-family: 'Baloo 2';
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 130%;
`

export const DeliveryDescription = styled.p`
  color: ${(props) => props.theme['base-subtitle']};

  font-family: 'Roboto';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`

export const DeliveryInfo = styled.div`
  display: flex;
  gap: 100px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 50px;
  }

  @media (max-width: 760px) {
    gap: 15px;
  }
`

export const OrderArea = styled.div`
  display: flex;
  width: 526px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-top: 40px;

  border-radius: 6px 36px;
  border: 1px solid #dbac2c;

  @media (max-width: 760px) {
    width: 100%;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const DeliveryImg = styled.img`
  width: 492px;
  height: 293px;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    margin: auto;
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`

const ICONS_COLORS = {
  local: 'purple',
  time: 'yellow',
  payment: 'yellow-dark',
} as const

interface IconsProps {
  $icon: keyof typeof ICONS_COLORS
}

export const OrderIcon = styled.div<IconsProps>`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 1000px;
  background: ${(props) => props.theme[ICONS_COLORS[props.$icon]]};

  svg {
    color: ${(props) => props.theme.white};
    width: 16px;
    height: 16px;
  }
`

export const OrderDescription = styled.p`
  color: ${(props) => props.theme['base-text']};

  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`

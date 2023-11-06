import styled from 'styled-components'

export const CoffeeCounter = styled.div`
  display: flex;
  height: 32px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  svg {
    width: 14px;
    height: 14px;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`

export const CoffeeQt = styled.span`
  color: ${(props) => props.theme['base-title']};
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  width: 20px;
`

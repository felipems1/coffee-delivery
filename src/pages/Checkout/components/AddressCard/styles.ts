import styled from 'styled-components'

export const AddressContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  width: 640px;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  @media (max-width: 760px) {
    width: 100%;
    padding: 30px 15px;
  }
`

export const AddressHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  svg {
    width: 22px;
    height: 22px;
    color: ${(props) => props.theme['yellow-dark']};
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

export const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  div {
    display: flex;
    gap: 12px;
  }
`

export const InputCep = styled.input`
  display: flex;
  width: 200px;
  padding: 12px;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};

  &:focus {
    outline: 2px solid ${(props) => props.theme['yellow-dark']};
  }

  &.error {
    outline: 2px solid red;
  }
`

export const InputRoad = styled.input`
  padding: 12px;
  align-items: center;
  gap: 4px;
  align-self: stretch;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};

  &:focus {
    outline: 2px solid ${(props) => props.theme['yellow-dark']};
  }

  &.error {
    outline: 2px solid red;
  }
`

export const InputNumber = styled.input`
  display: flex;
  width: 200px;
  padding: 12px;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};

  &:focus {
    outline: 2px solid ${(props) => props.theme['yellow-dark']};
  }

  &.error {
    outline: 2px solid red;
  }

  @media (max-width: 760px) {
    width: 50%;
  }
`

export const InputComplement = styled.input`
  display: flex;
  width: 348px;
  padding: 12px;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};

  &:focus {
    outline: 2px solid ${(props) => props.theme['yellow-dark']};
  }

  @media (max-width: 760px) {
    width: 50%;
  }
`

export const InputNeighborhood = styled.input`
  display: flex;
  width: 200px;
  padding: 12px;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};

  &:focus {
    outline: 2px solid ${(props) => props.theme['yellow-dark']};
  }

  &.error {
    outline: 2px solid red;
  }

  @media (max-width: 760px) {
    width: 40%;
  }
`

export const InputCity = styled.input`
  display: flex;
  padding: 12px;
  align-items: center;
  width: 276px;
  gap: 4px;
  flex: 1 0 0;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};

  &:focus {
    outline: 2px solid ${(props) => props.theme['yellow-dark']};
  }

  &.error {
    outline: 2px solid red;
  }

  @media (max-width: 760px) {
    width: 50%;
  }
`

export const InputUf = styled.input`
  display: flex;
  width: 60px;
  padding: 12px;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};

  &:focus {
    outline: 2px solid ${(props) => props.theme['yellow-dark']};
  }

  &.error {
    outline: 2px solid red;
  }
`

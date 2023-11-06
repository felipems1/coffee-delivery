import { MapPinLine } from '@phosphor-icons/react'
import {
  AddressContainer,
  AddressForm,
  AddressHeader,
  InputCep,
  InputCity,
  InputComplement,
  InputNeighborhood,
  InputNumber,
  InputRoad,
  InputUf,
} from './styles'
import { useFormContext } from 'react-hook-form'

export function AddressCard() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <AddressContainer>
      <AddressHeader>
        <MapPinLine />
        <div>
          <h3>Endereço de Entrega</h3>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </AddressHeader>
      <AddressForm>
        <InputCep
          type="number"
          id="cep"
          placeholder="CEP"
          {...register('cep', { valueAsNumber: true })}
          className={errors.cep && 'error'}
        />
        <InputRoad
          type="text"
          id="road"
          placeholder="Rua"
          {...register('road')}
          className={errors.road && 'error'}
        />
        <div>
          <InputNumber
            type="number"
            id="number"
            placeholder="Número"
            {...register('number', { valueAsNumber: true })}
            className={errors.number && 'error'}
          />
          <InputComplement
            type="text"
            id="complement"
            placeholder="Complemento"
            {...register('complement')}
          />
        </div>
        <div>
          <InputNeighborhood
            type="text"
            id="neighborhood"
            placeholder="Bairro"
            {...register('neighborhood')}
            className={errors.neighborhood && 'error'}
          />
          <InputCity
            type="text"
            id="city"
            placeholder="Cidade"
            {...register('city')}
            className={errors.city && 'error'}
          />
          <InputUf
            type="text"
            id="uf"
            placeholder="UF"
            maxLength={2}
            {...register('uf')}
            className={errors.uf && 'error'}
          />
        </div>
      </AddressForm>
    </AddressContainer>
  )
}

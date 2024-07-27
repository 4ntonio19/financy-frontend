import { useFormContext } from 'react-hook-form'
import { ContainerField, ErrorMessage } from './styles'

type Props = {
    label: string
    inputName: string
    defaultValue?: string
    placeholder: string
  }
  const SelectField = ({ label, inputName, defaultValue, placeholder }: Props) => {
    const { register, formState: { errors } } = useFormContext()
  
    return (
      <ContainerField>
        <label htmlFor={inputName}>{label}</label>
        <select defaultValue={defaultValue ?? ''} {...register(inputName, {required: 'Campo obrigatório'})}>
            <option value=''>{placeholder}</option>
            <option value={1}>Casa</option>
            <option value={2}>Cartão de crédito</option>
            <option value={3}>Transporte</option>
            <option value={4}>Alimentação</option>
            <option value={5}>Compras</option>
        </select>
        {errors[inputName] && <ErrorMessage>{errors[inputName]?.message?.toString()}</ErrorMessage>}
      </ContainerField>
    )
  }

export default SelectField

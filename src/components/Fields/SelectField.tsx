/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormContext } from 'react-hook-form'
import { ContainerField, ErrorMessage } from './styles'
import { ICategoryChart } from '../../entitites'

type Props = {
  label: string
  inputName: string
  defaultValue?: string
  placeholder: string
  options: ICategoryChart[] | []
}
const SelectField = ({
  label,
  inputName,
  defaultValue,
  placeholder,
  options,
}: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <ContainerField>
      <label htmlFor={inputName}>{label}</label>
      <select
        defaultValue={defaultValue ?? ''}
        {...register(inputName, { required: 'Campo obrigatório' })}
      >
        <option value="">{placeholder}</option>
        {options.map(opt => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
      {errors[inputName] && (
        <ErrorMessage>{errors[inputName]?.message?.toString()}</ErrorMessage>
      )}
    </ContainerField>
  )
}

export default SelectField

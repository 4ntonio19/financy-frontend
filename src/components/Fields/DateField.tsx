import { useFormContext } from "react-hook-form"
import { ContainerField, ErrorMessage } from "./styles"

type Props = {
  label: string
  inputName: string
  defaultValue?: string
  placeholder: string
}
const DateField = ({ label, inputName, defaultValue, placeholder }: Props) => {
  const { register, formState: { errors } } = useFormContext()

  return (
    <ContainerField>
      <label htmlFor={inputName}>{label}</label>
      <input
        {...register(inputName, { required: "Campo obrigatório" })}
        type='date'
        defaultValue={defaultValue}
        placeholder={placeholder}
        max='9999-31-12'
      />
      {errors[inputName] && <ErrorMessage>{errors[inputName].message?.toString()}</ErrorMessage>}
    </ContainerField>
  )
}

export default DateField

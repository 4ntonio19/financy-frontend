import { useFormContext } from "react-hook-form"
import { ContainerField, ErrorMessage } from "./styles"

type Props = {
  label: string
  inputName: string
  defaultValue?: string
  placeholder: string
}
const TextField = ({ label, inputName, defaultValue, placeholder }: Props) => {
  const { register, formState: { errors } } = useFormContext()

  return (
    <ContainerField>
      <label htmlFor={inputName}>{label}</label>
      <input
        {...register(inputName, { required: "Campo obrigatório" })}
        type='text'
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      {errors[inputName] && <ErrorMessage>{errors[inputName].message?.toString()}</ErrorMessage>}
    </ContainerField>
  )
}

export default TextField

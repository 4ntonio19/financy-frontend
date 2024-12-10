import { useFormContext } from "react-hook-form"
import { ContainerField, ErrorMessage } from "./styles"

type Props = {
  label: string
  inputName: string
  defaultValue?: string
  placeholder: string
}
const NumberField = ({ label, inputName, defaultValue, placeholder }: Props) => {
  const { formState: { errors } } = useFormContext()

  return (
    <ContainerField>
      <label htmlFor={inputName}>{label}</label>
      <input
        // {...register(inputName, { required: "Campo obrigatório" })}
        type='number'
        max={0}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      {errors[inputName] && <ErrorMessage>{errors[inputName]?.message?.toString()}</ErrorMessage>}
    </ContainerField>
  )
}

export default NumberField

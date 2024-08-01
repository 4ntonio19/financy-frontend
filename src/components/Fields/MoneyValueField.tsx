import { ContainerField, ErrorMessage } from "./styles"
import CurrencyInput from "react-currency-input-field"
import { useFormContext } from "react-hook-form"

type Props = {
  label: string
  inputName: string
  defaultValue?: string
  placeholder: string
}

const MoneyValueField = ({
  label,
  inputName,
  defaultValue,
  placeholder,
}: Props) => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext()
  return (
    <ContainerField>
      <label htmlFor={inputName}>{label}</label>
      <CurrencyInput
        id={inputName}
        name={inputName}
        placeholder={placeholder}
        decimalsLimit={2}
        decimalSeparator=','
        groupSeparator='.'
        prefix='R$ '
        defaultValue={defaultValue}
        onValueChange={(values) => {
          const formatValue = Number(values?.replace(",", "."))
          setValue(inputName, formatValue)
        }}
      />
      {errors[inputName] && (
        <ErrorMessage>{errors[inputName]?.message?.toString()}</ErrorMessage>
      )}
    </ContainerField>
  )
}

export default MoneyValueField

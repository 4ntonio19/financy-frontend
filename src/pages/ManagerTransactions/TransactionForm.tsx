import { FormProvider, useForm } from "react-hook-form"
import TextField from "../../components/Fields/TextField"
import Modal from "../../components/Modal/Modal"
import { ContainerTransactionForm } from "./styles"
import { useNavigate } from "react-router-dom"
import NumberField from "../../components/Fields/NumberField"
import DateField from "../../components/Fields/DateField"
import SelectField from "../../components/Fields/SelectField"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { useDispatch } from "react-redux"
import { ITransaction } from "../../entitites/ITransactions"
import { addTransaction } from "../../store/Transactions/transactionsSlice"

type FormFields = {
  title: string
  value: number
  category: string
  transactionDate: string
}

type Props = {
  typeTransaction: "income" | "expense"
}
const TransactionForm = ({ typeTransaction }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const methods = useForm<FormFields>()
  const onSubmit = (data: FormFields) => {
    const objToSend: ITransaction = {
      title: data.title,
      date: data.transactionDate,
      value: data.value,
      type: typeTransaction === "income" ? true : false,
      category: {
        icon: "fa-solid fa-house",
        name: "Casa",
        percentage: 15.52,
        color: "#9E77ED",
      },
    }

    dispatch(addTransaction(objToSend))
    navigate("/dashboard")
  }
  return (
    <Modal
      onClickSubmit={methods.handleSubmit(onSubmit)}
      title={
        <>
          Nova {typeTransaction === "income" ? "entrada" : "saída"}
          <FontAwesomeIcon
            color={typeTransaction === "income" ? "#0B9055" : "#F04438"}
            icon={
              `${
                typeTransaction === "income"
                  ? "fa-solid fa-arrow-up"
                  : "fa-solid fa-arrow-down"
              }` as IconProp
            }
          />
        </>
      }
      toggleClose={() => navigate("/dashboard")}>
      <FormProvider {...methods}>
        <ContainerTransactionForm>
          <TextField
            inputName='title'
            label='Insira o título:'
            placeholder='Digite o título da transação...'
          />
          <NumberField
            inputName='value'
            label='Insira o valor:'
            placeholder='Digite o valor da transação...'
          />
          <DateField
            inputName='transactionDate'
            label='Insira a data:'
            placeholder='dd/mm/aaaa'
          />
          <SelectField
            inputName='category'
            label='Escolha a categoria:'
            placeholder='Selecione a categoria...'
          />
        </ContainerTransactionForm>
      </FormProvider>
    </Modal>
  )
}

export default TransactionForm

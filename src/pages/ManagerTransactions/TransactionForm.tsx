import { FormProvider, useForm } from "react-hook-form"
import TextField from "../../components/Fields/TextField"
import Modal from "../../components/Modal/Modal"
import { ContainerTransactionForm } from "./styles"
import { useNavigate } from "react-router-dom"
import DateField from "../../components/Fields/DateField"
import SelectField from "../../components/Fields/SelectField"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

import MoneyValueField from "../../components/Fields/MoneyValueField"
import { ITransaction } from "../../entitites/ITransactions"
import { useGetCategoriesQuery } from "../../services/categoryService"
import { useAddTransactionMutation } from "../../services/transactionService"


type FormFields = {
  title: string
  transaction_value: number
  category: string
  date: string
}

type Props = {
  typeTransaction: "income" | "expense"
}
const TransactionForm = ({ typeTransaction }: Props) => {
  const navigate = useNavigate()
  const methods = useForm<FormFields>()
  const { data: categories } = useGetCategoriesQuery({    user_id: '951bfe2c-954e-40d9-88eb-e4b59690a920', type: typeTransaction === 'income' ? 'true': 'false'})
  const [addTransaction] = useAddTransactionMutation()
  const onSubmit = async (data: FormFields) => {
    if (typeTransaction === "expense") {
      if (data.transaction_value > 0) {
        data.transaction_value *= -1
      }
    }
    const categorySelect = categories?.find(
      (category) => category.id === data.category
    )
    if (categorySelect) {
      const objToSend: ITransaction = {
        ...data,
        type: typeTransaction === "income" ? true : false,
        category: {
          id: categorySelect?.id,
          name: categorySelect?.title,
          color: categorySelect?.color,
        },
      }
      console.log(categorySelect)
      console.log(objToSend)
      await addTransaction(objToSend).unwrap()
    }
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
          <MoneyValueField
            inputName='transaction_value'
            label='Insira o valor:'
            placeholder='Digite o valor da transação...'
          />
          <DateField
            inputName='date'
            label='Insira a data:'
            placeholder='dd/mm/aaaa'
          />
          <SelectField
            options={categories ?? []}
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

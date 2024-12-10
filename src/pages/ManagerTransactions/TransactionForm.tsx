import { FormProvider, useForm } from 'react-hook-form'
import TextField from '../../components/Fields/TextField'
import Modal from '../../components/Modal/Modal'
import { ContainerTransactionForm } from './styles'
import { useNavigate } from 'react-router-dom'
import DateField from '../../components/Fields/DateField'
import SelectField from '../../components/Fields/SelectField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import MoneyValueField from '../../components/Fields/MoneyValueField'
import { TransactionDto } from '../../entitites/Transaction'
import { useGetCategoriesQuery } from '../../services/categoryService'
import { useAddTransactionMutation } from '../../services/transactionService'

type FormFields = {
  title: string
  value: number
  categoryId: string
  date: string
}

type Props = {
  typeTransaction: 'income' | 'expense'
}
const TransactionForm = ({ typeTransaction }: Props) => {
  const navigate = useNavigate()
  const methods = useForm<FormFields>()
  const { data: categories } = useGetCategoriesQuery(
    typeTransaction === 'income'
  )
  const [addTransaction] = useAddTransactionMutation()
  const onSubmit = async (data: FormFields) => {
    const dto: TransactionDto = {
      ...data,
      type: typeTransaction === 'income',
    }
    await addTransaction(dto).unwrap()
    navigate('/dashboard')
  }
  return (
    <Modal
      onClickSubmit={methods.handleSubmit(onSubmit)}
      title={
        <>
          Nova {typeTransaction === 'income' ? 'entrada' : 'saída'}
          <FontAwesomeIcon
            color={typeTransaction === 'income' ? '#0B9055' : '#F04438'}
            icon={
              `${
                typeTransaction === 'income'
                  ? 'fa-solid fa-arrow-up'
                  : 'fa-solid fa-arrow-down'
              }` as IconProp
            }
          />
        </>
      }
      toggleClose={() => navigate('/dashboard')}
    >
      <FormProvider {...methods}>
        <ContainerTransactionForm>
          <TextField
            inputName="title"
            label="Insira o título:"
            placeholder="Digite o título da transação..."
          />
          <MoneyValueField
            inputName="value"
            label="Insira o valor:"
            placeholder="Digite o valor da transação..."
          />
          <DateField
            inputName="date"
            label="Insira a data:"
            placeholder="dd/mm/aaaa"
          />
          <SelectField
            options={categories ?? []}
            inputName="categoryId"
            label="Escolha a categoria:"
            placeholder="Selecione a categoria..."
          />
        </ContainerTransactionForm>
      </FormProvider>
    </Modal>
  )
}

export default TransactionForm

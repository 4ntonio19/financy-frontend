import { ContainerTransactionsList } from './styles'
import { formatCurrency } from '../../utils/formatterCurrency'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  useDeleteTransactionMutation,
  useGetTransactionsQuery,
} from '../../services/transactionService'
import { formatterDate } from '../../utils/formatterDate'
import { ITransaction } from '../../entitites/Transactions'
import { useSelector } from 'react-redux'
import { SelectDates } from '../../store/dateFilterSlice'

const TransactionsList = () => {
  const dates = useSelector(SelectDates)
  const { data: lastTransactions } = useGetTransactionsQuery({
    user_id: '951bfe2c-954e-40d9-88eb-e4b59690a920',
    startDate: dates.dateStart,
    endDate: dates.dateEnd,
  })

  const [deleteTransaction] = useDeleteTransactionMutation()

  const handleDelete = async (transaction: ITransaction) => {
    try {
      await deleteTransaction({
        user_id: '951bfe2c-954e-40d9-88eb-e4b59690a920',
        id: transaction.id,
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <ContainerTransactionsList>
      <header>
        <span>Últimas Transações</span>
        <p>Olhe suas últimas transações</p>
      </header>
      {lastTransactions && lastTransactions?.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Data</th>
              <th>Valor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {lastTransactions?.map(transaction => (
              <tr key={transaction.id}>
                <td>
                  <FontAwesomeIcon
                    icon={'fa-solid fa-circle' as IconProp}
                    size="xs"
                    color={transaction.category.color}
                    style={{ marginRight: '0.5rem' }}
                  />
                  {transaction.title}
                </td>
                <td>{transaction.category.title}</td>
                <td>{formatterDate(transaction.date)}</td>
                <td className={transaction.type ? 'income' : 'expense'}>
                  {formatCurrency(transaction.value)}
                </td>
                <td>
                  <FontAwesomeIcon icon={'fa-solid fa-pen' as IconProp} />
                  <FontAwesomeIcon
                    onClick={() => handleDelete(transaction)}
                    icon={'fa-solid fa-trash' as IconProp}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span className="label-noData">
          Não existem transações. Adicione uma entrada ou saída para exibi-la.
        </span>
      )}
    </ContainerTransactionsList>
  )
}

export default TransactionsList

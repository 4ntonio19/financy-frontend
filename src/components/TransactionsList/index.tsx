import { ContainerTransactionsList } from "./styles"
import { formatCurrency } from "../../utils/formatterCurrency"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { useGetTransactionsQuery } from "../../services/transactionService"
import { useEffect } from "react"
import { formatterDate } from "../../utils/formatterDate"

const TransactionsList = () => {
  const { data: lastTransactions } = useGetTransactionsQuery({
    user_id: "951bfe2c-954e-40d9-88eb-e4b59690a920",
    startDate: "2022-05-19",
    endDate: "2024-09-01",
  })

  useEffect(() => {
    console.log(lastTransactions)
  }, [lastTransactions])
  return (
    <ContainerTransactionsList>
      <header>
        <span>Últimas Transações</span>
        <p>Olhe suas últimas transações</p>
      </header>
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
          {lastTransactions?.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                <FontAwesomeIcon
                  icon={"fa-solid fa-circle" as IconProp}
                  size='xs'
                  color={transaction.category.color}
                  style={{ marginRight: "0.5rem" }}
                />
                {transaction.title}
              </td>
              <td>{transaction.category.title}</td>
              <td>{formatterDate(transaction.date)}</td>
              <td className={transaction.type ? "income" : "expense"}>
                {formatCurrency(transaction.value)}
              </td>
              <td>
                <FontAwesomeIcon
                  icon={"fa-solid fa-pen" as IconProp}
                />
                <FontAwesomeIcon
                  icon={"fa-solid fa-trash" as IconProp}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ContainerTransactionsList>
  )
}

export default TransactionsList

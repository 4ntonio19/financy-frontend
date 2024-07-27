/* eslint-disable @typescript-eslint/no-unused-vars */
import { ContainerTransactionsList } from "./styles"
import { formatCurrency } from "../../utils/formatterCurrency"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { useSelector } from "react-redux"
import { selectTransactions } from "../../store/Transactions/transactionsSlice"
const TransactionsList = () => {
  const lastTransactions = useSelector(selectTransactions)
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
          {lastTransactions.map((transaction) => (
            <tr key={transaction.title}>
              <td>
                <FontAwesomeIcon
                  icon={"fa-solid fa-circle" as IconProp}
                  size='xs'
                  color={transaction.category.color}
                  style={{ marginRight: "0.5rem" }}
                />
                {transaction.title}
              </td>
              <td>{transaction.category.name}</td>
              <td>{transaction.date}</td>
              <td className={transaction.type ? "income" : "expense"}>
                {formatCurrency(transaction.value)}
              </td>
              <td>
                <FontAwesomeIcon
                  icon={"fa-solid fa-ellipsis-vertical" as IconProp}
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

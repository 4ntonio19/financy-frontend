/* eslint-disable @typescript-eslint/no-unused-vars */
import { ContainerTransactionsList } from "./styles"
import mock from "../../mock/mock.json"
import { useState } from "react"
import { formatCurrency } from "../../utils/formatterCurrency"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core"
const TransactionsList = () => {
  const [lastTransactions] = useState(mock.transactions)
  return (
    <ContainerTransactionsList>
      <header>
        <span>Últimas Transações</span>
        <p>Olhe suas últimas transações</p>
      </header>
      <table>
        <tr>
          <th>Descrição</th>
          <th>Categoria</th>
          <th>Data</th>
          <th>Valor</th>
          <th></th>
        </tr>
        {lastTransactions.map((transaction) => (
          <tr>
            <td>
            <FontAwesomeIcon icon={"fa-solid fa-circle" as IconProp} size="xs" color={transaction.category_color} style={{marginRight: '0.5rem'}} />
              {transaction.description}
            </td>
            <td>{transaction.category}</td>
            <td>{transaction.date}</td>
            <td className={transaction.type ? 'income' : 'expense'}>{formatCurrency(transaction.value)}</td>
            <td>
            <FontAwesomeIcon icon={"fa-solid fa-ellipsis-vertical" as IconProp} />
            </td>
          </tr>
        ))}
      </table>
    </ContainerTransactionsList>
  )
}

export default TransactionsList

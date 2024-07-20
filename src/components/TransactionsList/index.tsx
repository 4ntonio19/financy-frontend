/* eslint-disable @typescript-eslint/no-unused-vars */
import { BsThreeDotsVertical } from "react-icons/bs"
import { ContainerTransactionsList } from "./styles"
import { LuDot } from "react-icons/lu"
import mock from "../../mock/mock.json"
import { useState } from "react"

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
            <td style={{ display: "flex", alignItems: "center", color: "#101828" }}>
              <LuDot />
              {transaction.description}
            </td>
            <td>{transaction.category}</td>
            <td>{transaction.date}</td>
            <td className={transaction.type ? 'income' : 'expense'}>{transaction.value}</td>
            <td>
              <BsThreeDotsVertical />
            </td>
          </tr>
        ))}
      </table>
    </ContainerTransactionsList>
  )
}

export default TransactionsList

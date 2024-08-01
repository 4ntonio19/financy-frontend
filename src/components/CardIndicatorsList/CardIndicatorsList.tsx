import { useState, useEffect } from "react"
import { useGetTransactionsQuery } from "../../services/api"
import { formatCurrency } from "../../utils/formatterCurrency"
import { ContainerCardIndicatorsList } from "./styles"
import CardIndicators from "./CardIndicators"

const CardIndicatorsList = () => {
    const { data: transactions } = useGetTransactionsQuery()
  const [balance, setBalance] = useState("")
  const [incomes, setIncomes] = useState("")
  const [expenses, setExpenses] = useState("")

  useEffect(() => {
    const totalBalance = transactions?.reduce((acc, cur) => {
      return acc + Number(cur.transaction_value)
    }, 0)

    const totalIncomes = transactions
      ?.filter((transaction) => transaction.type === true)
      .reduce((acc, cur) => {
        return acc + cur.transaction_value
      }, 0)

    const totalExpenses = transactions
      ?.filter((transaction) => transaction.type === false)
      .reduce((acc, cur) => {
        return acc + cur.transaction_value
      }, 0)
    setBalance(formatCurrency(totalBalance ?? 0))
    setIncomes(formatCurrency(totalIncomes ?? 0))
    setExpenses(formatCurrency(totalExpenses ?? 0))
  }, [transactions])
  return (
    <ContainerCardIndicatorsList>
      <CardIndicators
        title='Balanço'
        value={balance}
        icon='fa-solid fa-arrow-up'
        colorIcon='#17B26A'
        color='#155EEF'
        percentage='0%'
      />
      <CardIndicators
        title='Entradas'
        value={incomes}
        icon='fa-solid fa-arrow-up'
        colorIcon='#17B26A'
        color='#22292F'
        percentage='0%'
      />
      <CardIndicators
        title='Saídas'
        value={`${expenses}`}
        icon='fa-solid fa-arrow-down'
        colorIcon='#F04438'
        color='#22292F'
        percentage='0%'
      />
    </ContainerCardIndicatorsList>
  )
}

export default CardIndicatorsList

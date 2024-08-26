import { useState, useEffect } from "react"
import { formatCurrency } from "../../utils/formatterCurrency"
import { ContainerCardIndicatorsList } from "./styles"
import CardIndicators from "./CardIndicators"
import { useGetTransactionsQuery } from "../../services/transactionService"

const CardIndicatorsList = () => {
  const { data: transactions } = useGetTransactionsQuery({
    user_id: "951bfe2c-954e-40d9-88eb-e4b59690a920",
    startDate: "2022-05-19",
    endDate: "2024-09-01",
  })
  const [balance, setBalance] = useState("")
  const [incomes, setIncomes] = useState("")
  const [expenses, setExpenses] = useState("")

  useEffect(() => {
    const totalBalance = transactions?.reduce((acc, cur) => {
      const value = Number(cur.value)
      if (cur.type !== undefined) {
        return acc + (cur.type === false ? value * -1 : value)
      }
      return acc
    }, 0)

    const totalIncomes = transactions
      ?.filter((transaction) => transaction.type === true)
      .reduce((acc, cur) => {
        return acc + cur.value
      }, 0)

    const totalExpenses = transactions
      ?.filter((transaction) => transaction.type === false)
      .reduce((acc, cur) => {
        return acc + (cur.value * -1)
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

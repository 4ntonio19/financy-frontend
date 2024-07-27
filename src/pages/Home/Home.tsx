import CardIndicators from "../../components/CardIndicators"
import FilterPeriod from "../../components/Filter/FilterPeriod"
import { ContainerHome, SSection } from "./styles"
import CardTransactions from "../../components/CardTransactions"
import CategoryChart from "../../components/CategoryChart"
import TransactionsList from "../../components/TransactionsList"
import mock from "../../mock/mock.json"
import { useEffect, useState } from "react"
import { formatCurrency } from "../../utils/formatterCurrency"
import { ITransaction } from "../../entitites/ITransactions"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

import { Outlet } from "react-router-dom"
const Home = () => {
  const [transactions] = useState<ITransaction[]>(mock.transactions)
  const [balance, setBalance] = useState("")
  const [incomes, setIncomes] = useState("")
  const [expenses, setExpenses] = useState("")

  useEffect(() => {
    const totalBalance = transactions.reduce((acc, cur) => {
      return acc + Number(cur.value)
    }, 0)

    const totalIncomes = transactions
      .filter((transaction) => transaction.value > 0)
      .reduce((acc, cur) => {
        return acc + cur.value
      }, 0)

    const totalExpenses = transactions
      .filter((transaction) => transaction.value < 0)
      .reduce((acc, cur) => {
        return acc + cur.value
      }, 0)

    setBalance(formatCurrency(totalBalance))
    setIncomes(formatCurrency(totalIncomes))
    setExpenses(formatCurrency(totalExpenses))
  }, [transactions])
  return (
    <>
      <ContainerHome>
        <div className='home-content'>
          <header className='home-header'>
            <h1>Olá, Antonio!</h1>
            <section className='container-period'>
              <FilterPeriod />
            </section>
          </header>
          <SSection className='indicators-section'>
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
              value={expenses}
              icon='fa-solid fa-arrow-down'
              colorIcon='#F04438'
              color='#22292F'
              percentage='0%'
            />
          </SSection>
          <SSection>
            <CardTransactions
              navigateTo='/dashboard/addIncome'
              bgdIconColor='#DCFAE6'
              title='Adicionar entrada'
              explanation='Crie manualmente uma entrada'
              icon={
                <FontAwesomeIcon
                  color='#0B9055'
                  icon={"fa-solid fa-plus" as IconProp}
                />
              }
            />
            <CardTransactions
              navigateTo='/dashboard/addExpense'
              bgdIconColor='#FEE4E2'
              title='Adicionar saída'
              explanation='Crie manualmente uma saída'
              icon={
                <FontAwesomeIcon
                  color='#D92D20'
                  icon={"fa-solid fa-minus" as IconProp}
                />
              }
            />
            <CardTransactions
              navigateTo='/dashboard/addTranfer'
              bgdIconColor='#F9FAFB'
              title='Transferir dinheiro'
              explanation='Selecione o valor para transferir'
              icon={
                <FontAwesomeIcon
                  color='#155EEF'
                  icon={"fa-solid fa-arrow-right-arrow-left" as IconProp}
                />
              }
            />
          </SSection>
          <SSection className='transactions-section'>
            <CategoryChart />
            <TransactionsList />
          </SSection>
        </div>
      </ContainerHome>
      <Outlet />
    </>
  )
}

export default Home

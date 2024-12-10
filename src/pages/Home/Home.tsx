import FilterPeriod from '../../components/Filter/FilterPeriod'
import { ContainerHome, SSection } from './styles'
import CardTransactions from '../../components/CardTransactions'
import CategoryChart from '../../components/CategoryChart'
import TransactionsList from '../../components/TransactionsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { Outlet } from 'react-router-dom'
import CardIndicatorsList from '../../components/CardIndicatorsList/CardIndicatorsList'
const Home = () => {
  // const transactions = useSelector(selectTransactions)

  return (
    <>
      <ContainerHome>
        <div className="home-content">
          <header className="home-header">
            <h1>Olá, Antonio!</h1>
            <section className="container-period">
              <FilterPeriod />
            </section>
          </header>
          <CardIndicatorsList />
          <SSection>
            <CardTransactions
              navigateTo="/dashboard/addIncome"
              bgdIconColor="#DCFAE6"
              title="Adicionar entrada"
              explanation="Crie manualmente uma entrada"
              icon={
                <FontAwesomeIcon
                  color="#0B9055"
                  icon={'fa-solid fa-plus' as IconProp}
                />
              }
            />
            <CardTransactions
              navigateTo="/dashboard/addExpense"
              bgdIconColor="#FEE4E2"
              title="Adicionar saída"
              explanation="Crie manualmente uma saída"
              icon={
                <FontAwesomeIcon
                  color="#D92D20"
                  icon={'fa-solid fa-minus' as IconProp}
                />
              }
            />
            <CardTransactions
              navigateTo="/dashboard/addTranfer"
              bgdIconColor="#F9FAFB"
              title="Gerenciar categorias"
              explanation="Crie, edite e apague suas categorias"
              icon={
                <FontAwesomeIcon
                  color="#155EEF"
                  icon={'fa-solid fa-arrow-right-arrow-left' as IconProp}
                />
              }
            />
          </SSection>
          <SSection className="transactions-section">
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

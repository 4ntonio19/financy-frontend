import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import Card from "../../components/CardIndicators"
import FilterPeriod from "../../components/Filter/FilterPeriod"
import { ContainerHome, SSection } from "./styles"
import CardTransactions from "../../components/CardTransactions"
import { LuPlusCircle } from "react-icons/lu"
import { FiMinusCircle } from "react-icons/fi"
import { GoArrowSwitch } from "react-icons/go"
import CategoryChart from "../../components/CategoryChart"
import TransactionsList from "../../components/TransactionsList"

const Home = () => {
  return (
    <ContainerHome>
      <div className='home-content'>
        <header className='home-header'>
          <h1>Olá, Antonio!</h1>
          <section className='container-period'>
            <FilterPeriod />
          </section>
        </header>
        <SSection className="indicators-section">
          <Card
            title='Balanço'
            value='R$5,502.45'
            icon={<FaArrowUp color='#17B26A' />}
            color='#155EEF'
            percentage='12,5%'
          />
          <Card
            title='Entradas'
            value='R$9,450.00'
            icon={<FaArrowUp color='#17B26A' />}
            color='#22292F'
            percentage='27%'
          />
          <Card
            title='Saídas'
            value='R$3,845.55'
            icon={<FaArrowDown color='#F04438' />}
            color='#22292F'
            percentage='-15%'
          />
        </SSection>
        <SSection>
          <CardTransactions
            bgdIconColor='#DCFAE6'
            title='Adicionar entrada'
            explanation='Crie manualmente uma entrada'
            icon={<LuPlusCircle color='#0B9055' />}
          />
          <CardTransactions
            bgdIconColor='#FEE4E2'
            title='Adicionar saída'
            explanation='Crie manualmente uma saída'
            icon={<FiMinusCircle color='#D92D20' />}
          />
          <CardTransactions
            bgdIconColor='#F9FAFB'
            title='Transferir dinheiro'
            explanation='Selecione o valor para transferir'
            icon={<GoArrowSwitch color='#155EEF' />}
          />
        </SSection>
        <SSection className="transactions-section">
          <CategoryChart />
          <TransactionsList />
          <div></div>
        </SSection>
      </div>
    </ContainerHome>
  )
}

export default Home

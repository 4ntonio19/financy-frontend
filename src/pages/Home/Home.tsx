import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import Card from "../../components/CardIndicators"
import FilterPeriod from "../../components/Filter/FilterPeriod"
import { ContainerHome, ContainerIndicators } from "./styles"

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
        <ContainerIndicators>
          <Card title="Balanço" value='R$5,502.45' icon={<FaArrowUp color="#17B26A"/>} color="#155EEF" percentage="12,5%"/>
          <Card title="Renda" value='R$9,450.00' icon={<FaArrowUp color="#17B26A" />} percentage="27%"/>
          <Card title="Gasto" value='R$3,845.55' icon={<FaArrowDown color="#F04438"/>} percentage="-15%"/>
        </ContainerIndicators>
      </div>
    </ContainerHome>
  )
}

export default Home

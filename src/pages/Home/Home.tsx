import { ContainerHome } from "./styles"

const Home = () => {
  return (
    <ContainerHome>
      <div className='home-content'>
        <header className='home-header'>
          <h1>Hello, Toin!</h1>
          <section className='container-period'>
            <ul>
              <li>This month</li>
              <li>Last month</li>
              <li>This year</li>
              <li>Last 12 months</li>
            </ul>

            <button>Select period</button>
          </section>
        </header>
      </div>
    </ContainerHome>
  )
}

export default Home

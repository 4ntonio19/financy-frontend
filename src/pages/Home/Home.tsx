import FilterPeriod from "../../components/Filter/FilterPeriod"
import { ContainerHome } from "./styles"

const Home = () => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState();
  // const onChange = (dates: any) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  // }
  return (
    <ContainerHome>
      <div className='home-content'>
        <header className='home-header'>
          <h1>Olá, Antonio!</h1>
          <section className='container-period'>
            <FilterPeriod/>
          </section>
        </header>
      </div>
      {/* <DatePicker
      selected={startDate}
      onChange={onChange}
      minDate={new Date()}
      maxDate={addMonths(new Date(), 5)}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
      showDisabledMonthNavigation
    /> */}
    </ContainerHome>
  )
}

export default Home

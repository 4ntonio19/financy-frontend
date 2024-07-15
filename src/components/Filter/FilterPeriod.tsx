import { useState } from "react"
import { WrapperFilter } from "./styles"
import { CiCalendarDate } from "react-icons/ci"

const FilterPeriod = () => {
  const [period, setPeriod] = useState<number>(1)
  return (
    <WrapperFilter>
      <li className={period === 1 ? 'active' : ''} onClick={() => setPeriod(1)}>Esse mês</li>
      <li className={period === 2 ? 'active' : ''} onClick={() => setPeriod(2)}>Último mês</li>
      <li className={period === 3 ? 'active' : ''} onClick={() => setPeriod(3)}>Esse ano</li>
      <li className={period === 4 ? 'active' : ''} onClick={() => setPeriod(4)}>Últimos 12 meses</li>
      <li className={period === 5 ? 'active' : ''} onClick={() => setPeriod(5)}> <CiCalendarDate /> Selecione o período</li>
    </WrapperFilter>
  )
}

export default FilterPeriod

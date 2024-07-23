import { useState } from "react"
import { WrapperFilter } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

const FilterPeriod = () => {
  const [period, setPeriod] = useState<number>(1)
  return (
    <WrapperFilter>
      <li className={period === 1 ? 'active' : ''} onClick={() => setPeriod(1)}>Esse mês</li>
      <li className={period === 2 ? 'active' : ''} onClick={() => setPeriod(2)}>Último mês</li>
      <li className={period === 3 ? 'active' : ''} onClick={() => setPeriod(3)}>Esse ano</li>
      <li className={period === 4 ? 'active' : ''} onClick={() => setPeriod(4)}>Últimos 12 meses</li>
      <li className={period === 5 ? 'active' : ''} onClick={() => setPeriod(5)}> {<FontAwesomeIcon icon={"fa-solid fa-calendar-week" as IconProp} color="#516778" size="lg"/>} Selecione o período</li>
    </WrapperFilter>
  )
}

export default FilterPeriod

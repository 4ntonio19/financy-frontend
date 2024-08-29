import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CardContainer } from "./styles"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

type Props = {
  title: string
  value: string | number
  icon: string
  colorIcon: string
  percentage: string
  color?: string
}
const CardIndicators = ({ title, value, icon, percentage, color, colorIcon }: Props) => {
  return (
    <CardContainer>
      <p>{title}</p>
      <section>
        <span style={{color: color, wordWrap: 'normal'}}>{value}</span>
        <div className="container-percentage">
        <FontAwesomeIcon icon={icon as IconProp} color={colorIcon}/>
          <p>{percentage}</p>
        </div>
      </section>
    </CardContainer>
  )
}

export default CardIndicators

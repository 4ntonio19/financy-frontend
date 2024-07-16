import { CardContainer } from "./styles"

type Props = {
  title: string
  value: string | number
  icon: React.ReactNode
  percentage: string
  color?: string
}
const Card = ({ title, value, icon, percentage, color }: Props) => {
  return (
    <CardContainer>
      <p>{title}</p>
      <section>
        <span style={{color: color}}>{value}</span>
        <div className="container-percentage">
          {icon}
          <p>{percentage}</p>
        </div>
      </section>
    </CardContainer>
  )
}

export default Card

import { useNavigate } from "react-router-dom"
import { ContainerTransactions } from "./styles"

type Props = {
  title: string
  explanation: string
  icon: React.ReactNode
  bgdIconColor?: string
  navigateTo: string
}
const CardTransactions = ({
  title,
  explanation,
  icon,
  bgdIconColor,
  navigateTo
}: Props) => {
  const navigate = useNavigate()
  return (
    <ContainerTransactions onClick={() => navigate(navigateTo)}>
      <div className='container-icon' style={{ backgroundColor: bgdIconColor }}>
        {icon}
      </div>
      <section className='container-text'>
        <span>{title}</span>
        <p>{explanation}</p>
      </section>
    </ContainerTransactions>
  )
}

export default CardTransactions

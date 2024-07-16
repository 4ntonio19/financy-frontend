import { ContainerTransactions } from "./styles"

type Props = {
    title: string
    explanation: string
    icon: React.ReactNode
    bgdIconColor?: string
}
const CardTransactions = ({ title, explanation, icon, bgdIconColor }: Props) => {
  return (
    <ContainerTransactions>
        <div className="container-icon" style={{backgroundColor: bgdIconColor}}>{icon}</div>
        <section className="container-text">
            <span>{title}</span>
            <p>{explanation}</p>
        </section>
    </ContainerTransactions>
  )
}

export default CardTransactions

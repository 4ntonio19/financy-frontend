import Header from "./Header"
import { ContainerLayout } from "./styles"

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <ContainerLayout>
        <Header/>
        {children}
    </ContainerLayout>
  )
}

export default Layout

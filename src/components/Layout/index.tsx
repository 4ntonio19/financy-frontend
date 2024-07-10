import { Outlet } from "react-router-dom"
import { ContainerLayout } from "./styles"
import Header from "./Header"


const Layout = () => {
  return (
    <ContainerLayout>
        <Header/>
        <Outlet/>
    </ContainerLayout>
  )
}

export default Layout

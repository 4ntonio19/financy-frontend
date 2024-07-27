import { ContainerLayout } from "./styles"
import Header from "./Header"
import React from "react"

type Props = {
  children: React.ReactNode
}
const Layout = ( { children }: Props ) => {
  return (
    <ContainerLayout>
        <Header/>
        {children}
    </ContainerLayout>
  )
}

export default Layout

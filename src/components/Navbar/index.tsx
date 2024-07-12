import { Link, useLocation } from "react-router-dom"
import { Container } from "./styles"

type NavLink = {
  path: string
  pageName: string
}

const links: NavLink[] = [
  { path: "/", pageName: "Dashboard" },
  { path: "/transactions", pageName: "Transações" },
  { path: "/analytics", pageName: "Analytics" },
  { path: "/accounts", pageName: "Contas" },
  { path: "/wallet", pageName: "Carteira" },
]

const Navbar = () => {
  const { pathname } = useLocation()
  return (
    <Container>
      {links.map((link) => (
        <Link to={link.path} className={pathname === link.path ? "active" : ""}>
          {link.pageName}
        </Link>
      ))}
    </Container>
  )
}

export default Navbar

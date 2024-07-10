import { ContainerHeader, WrapperHeaderContent } from "./styles"
import logoFinancy from "../../assets/Logo.png"
import { Link, useLocation } from "react-router-dom"
import { CiSettings } from "react-icons/ci"
import { IoMdNotificationsOutline } from "react-icons/io"
import { FaRegUserCircle } from "react-icons/fa"
const Header = () => {
  const { pathname } = useLocation()
  return (
    <ContainerHeader>
      <WrapperHeaderContent>
        <div className='container-logo'>
          <img src={logoFinancy} alt='logo da financy' />
        </div>
        <nav>
          <Link to='/home' className={pathname === "/home" ? "active" : ""}>
            Overview
          </Link>
          <Link
            to='/transactions'
            className={pathname === "/transactions" ? "active" : ""}>
            Transactions
          </Link>
          <Link
            to='/analytics'
            className={pathname === "/analytics" ? "active" : ""}>
            Analytics
          </Link>
          <Link
            to='/accounts'
            className={pathname === "/accounts" ? "active" : ""}>
            Accounts
          </Link>
          <Link to='/wallet' className={pathname === "/wallet" ? "active" : ""}>
            Wallet
          </Link>
        </nav>
        <div className='account-options'>
          <button>
            <CiSettings size='24px' />
          </button>
          <button>
            <IoMdNotificationsOutline size='24px' />
          </button>
          <FaRegUserCircle size='28px' />
        </div>
      </WrapperHeaderContent>
    </ContainerHeader>
  )
}

export default Header

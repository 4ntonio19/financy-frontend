import { ContainerHeader, WrapperHeaderContent } from "./styles"
import logoFinancy from "../../assets/Logo.png"
import { CiSettings } from "react-icons/ci"
import { IoMdNotificationsOutline } from "react-icons/io"
import { FaRegUserCircle } from "react-icons/fa"
import Navbar from "../Navbar"
const Header = () => {
  return (
    <ContainerHeader>
      <WrapperHeaderContent>
        <div className='container-logo'>
          <img src={logoFinancy} alt='logo da financy' />
        </div>
        <Navbar/>
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

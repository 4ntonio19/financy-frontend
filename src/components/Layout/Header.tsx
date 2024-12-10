import { ContainerHeader, WrapperHeaderContent } from './styles'
import logoFinancy from '../../assets/Logo_com_nome.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Navbar from '../Navbar'
const Header = () => {
  return (
    <ContainerHeader>
      <WrapperHeaderContent>
        <div className="container-logo">
          <img src={logoFinancy} alt="logo da financy" />
        </div>
        <Navbar />
        <div className="account-options">
          {/* <button>
          <FontAwesomeIcon icon={"fa-solid fa-gear" as IconProp} size={'xl'} color="#516778"/>
          </button>
          <button>
          <FontAwesomeIcon icon={"fa-regular fa-bell" as IconProp} size={'xl'} color="#516778"/>
          </button> */}
          <FontAwesomeIcon
            icon={'fa-regular fa-circle-user' as IconProp}
            size={'xl'}
            color="#516778"
          />
        </div>
      </WrapperHeaderContent>
    </ContainerHeader>
  )
}

export default Header

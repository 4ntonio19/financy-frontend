import { ContainerHeader, WrapperHeaderContent } from './styles'
import logoFinancy from '../../assets/Logo_com_nome.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Navbar from '../Navbar'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearSession } from '../../store/auth/authSlice'
const Header = () => {
  const [openMenu, setIsOpenMenu] = useState(false)
  const dispatch = useDispatch()
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
          <div className="wrapper-user-menu">
            <FontAwesomeIcon
              icon={'fa-regular fa-circle-user' as IconProp}
              size={'xl'}
              color="#516778"
              onClick={() => setIsOpenMenu(!openMenu)}
            />
            {openMenu && (
              <ul className="menu">
                {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                <li onClick={() => dispatch(clearSession())}>Logout</li>
              </ul>
            )}
          </div>
        </div>
      </WrapperHeaderContent>
    </ContainerHeader>
  )
}

export default Header

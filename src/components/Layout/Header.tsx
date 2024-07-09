import { ContainerHeader, WrapperHeaderContent } from './styles'
import logoFinancy from '../../assets/Logo.png'
const Header = () => {
  return (
    <ContainerHeader>
        <WrapperHeaderContent>
            <div className='logo'>
                <img src={logoFinancy} alt="logo da financy" />
            </div>
            <nav>
                <li><a href="">Overview</a></li>
                <li><a href="">Transactions</a></li>
                <li><a href="">Analytics</a></li>
                <li><a href="">Accounts</a></li>
                <li><a href="">Wallet</a></li>
            </nav>
            <div className='account-options'>
                <p>settings</p>
                <p>notifications</p>
            </div>
        </WrapperHeaderContent>
    </ContainerHeader>
  )
}

export default Header

import { Link } from "react-router-dom";
import LogoHeader from "../../assets/logo-home.svg";
import SHeader from "./styles";

const Header = () => {
  return (
    <SHeader>
      <div className="container">
        <div className="title-header">
          <h1>Finance Control</h1>
          <img src={LogoHeader} alt="Logo Finance Control" />
        </div>
        <Link to={"/login"}>
          <p>Entrar</p>
        </Link>
      </div>
    </SHeader>
  );
};

export default Header;

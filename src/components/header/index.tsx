import LogoHeader from "../../assets/logo-home.svg";
import SHeader from "./styles";
import { useState } from "react";
import ModalAuth from "../Modal";
import LoginModal from "../loginModal";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [modalLoginIsOpen, setIsOpen] = useState(false);

  const location = useLocation().pathname;

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <SHeader>
      <div className="container">
        <div className="title-header">
          <h1>Finance Control</h1>
          <img src={LogoHeader} alt="Logo Finance Control" />
        </div>
        {location === "/" ? (
          <>
            <a onClick={() => setIsOpen(true)}>
              <p>Entrar</p>
            </a>
            {modalLoginIsOpen && (
              <ModalAuth isOpen={modalLoginIsOpen} onClose={closeModal}>
                <LoginModal />
              </ModalAuth>
            )}
          </>
        ) : (
          <ol className="list-links">
            <li className="link">
              <a>
                <p>Home</p>
              </a>
            </li>
            <li className="link-transaction">
              <a>
                <p>Transações</p>
              </a>
            </li>
            <li className="link">
              <a>
                <p>Balanço</p>
              </a>
            </li>
          </ol>
        )}
      </div>
    </SHeader>
  );
};

export default Header;

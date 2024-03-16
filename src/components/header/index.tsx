import LogoHeader from "../../assets/logo-home.svg";
import SHeader from "./styles";
import { useState } from "react";
import ModalAuth from "../Modal";
import LoginModal from "../loginModal";

const Header = () => {
  const [modalLoginIsOpen, setIsOpen] = useState(false);
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
        <a onClick={() => setIsOpen(true)}>
          <p>Entrar</p>
        </a>
        {modalLoginIsOpen && (
          <ModalAuth isOpen={modalLoginIsOpen} onClose={closeModal}>
            <LoginModal />
          </ModalAuth>
        )}
      </div>
    </SHeader>
  );
};

export default Header;

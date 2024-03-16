import Button from "../button";
import SContainer from "./styles";
import { useState } from "react";
import RegisterModal from "../registerModal";
import ModalAuth from "../Modal";
const HomeContent = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  // const openModal = () => {
  //   setIsOpen(true);
  //   console.log(modalIsOpen);

  //   <ModalAuth isOpen={modalIsOpen}>
  //     <RegisterModal />
  //   </ModalAuth>;
  // };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <SContainer>
      <div className="welcome-content">
        <p>
          Cansado de viver no vermelho? Finance Control te ajuda a conquistar a
          liberdade financeira!
        </p>
        <p>Organize seus gastos, crie metas e alcance seus objetivos.</p>
        <p>Crie sua conta gratuitamente e tenha tudo isso em um único lugar:</p>
        <Button onClick={() => setIsOpen(true)}>Cadastre-se</Button>
        {modalIsOpen && (
          <ModalAuth isOpen={modalIsOpen} onClose={closeModal}>
            <RegisterModal />
          </ModalAuth>
        )}
      </div>
    </SContainer>
  );
};

export default HomeContent;

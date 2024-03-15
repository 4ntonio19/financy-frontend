import { Link } from "react-router-dom";
import Button from "../button";
import SContainer from "./styles";
import { useState } from "react";
import Modal from "react-modal";
import RegisterModal from "../registerModal";
Modal.setAppElement("#root");
const HomeContent = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

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
        <Link to={"/"} onClick={openModal}>
          <Button>Cadastre-se</Button>
        </Link>
        <Modal
          className="modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0 ,0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            content: {
              width: "350px",
              height: "400px",
              border: "1px solid green",
              background: "#FFFF",
              borderRadius: "8px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            },
          }}
        >
          <RegisterModal />
        </Modal>
      </div>
    </SContainer>
  );
};

export default HomeContent;

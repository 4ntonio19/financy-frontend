import { ReactNode, useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");
type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
const ModalAuth = ({ children, isOpen, onClose }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [MdisOpen, setIsOpen] = useState(isOpen);
  return (
    <Modal
      className="modal"
      isOpen={MdisOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0 ,0, 0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          width: "350px",
          height: "auto",
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
      {children}
    </Modal>
  );
};

export default ModalAuth;

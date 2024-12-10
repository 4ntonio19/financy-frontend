import React from "react"
import { ContainerModal, ContentModal } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import Button from "../Button"

type Props = {
  children: React.ReactNode
  title: React.ReactNode
  toggleClose: () => void
  onClickSubmit: () => void
}

const Modal = ({ children, title, toggleClose, onClickSubmit }: Props) => {
  return (
    <ContainerModal>
      <ContentModal>
        <header>
          <span>{title}</span>
          <FontAwesomeIcon icon={faClose} onClick={toggleClose} color="#D92D20"/>
        </header>
        {children}
        <footer>
          <Button
            styles={{ backgroundColor: "#F04438", color: "#FFFFFF" }}
            onClick={toggleClose}>
            Cancelar
          </Button>
          <Button
            type='submit'
            styles={{ backgroundColor: "#17B26A", color: "#FFFFFF" }}
            onClick={onClickSubmit}>
            Adicionar
          </Button>
        </footer>
      </ContentModal>
    </ContainerModal>
  )
}

export default Modal

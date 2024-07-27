import styled from "styled-components"

export const ContainerModal = styled.dialog`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  right: 0;
  border: 0;
  z-index: 1;
  overflow-y: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentModal = styled.div`
  width: 40%;
  min-width: 22rem;
  max-height: 90%;
  padding: 1rem;
  border-radius: 0.875rem;
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray._200};
    span {
      color: ${({ theme }) => theme.colors.blue._600};
      font-size: 1.5rem;
      font-weight: 600;
    }

    svg {
      cursor: pointer;
      width: 1.3rem;
      height: 1.3rem;
    }
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
  }
`

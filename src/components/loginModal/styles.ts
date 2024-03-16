import styled from "styled-components";

export const SContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  .modal-header {
    font-family: Montserrat;
    font-size: 0.7rem;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: center;
    h1 {
      font-weight: 500;
    }
  }
  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    gap: 10px;

    .label-input {
      display: flex;
      flex-direction: column;
      gap: 3px;
      font-family: Montserrat;
      font-size: 0.8rem;
      height: auto;
      width: 90%;

      input {
        height: 1.8rem;
        border: 1px solid gray;
        border-radius: 7px;
        padding: 5px;
        font-size: 0.7rem;
      }
    }

    .error-message {
      font-size: 0.6rem;
      color: red;
    }
    button {
      height: 1.8rem;
      font-size: 0.7rem;
      font-weight: 500;
      border-radius: 7px;
      width: 90%;
    }
  }

  .modal-footer {
    p {
      font-size: 0.7rem;
      font-family: Montserrat;
    }
    a {
      text-decoration: none;
      color: blue;
    }
  }
`;

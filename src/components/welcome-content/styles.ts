import styled from "styled-components";

const SContainer = styled.div`
  width: 80%;
  height: 100%;
  justify-self: center;
  display: flex;
  justify-content: space-between;
  .welcome-content {
    font-family: Montserrat;
    font-size: 1.5rem;
    width: 500px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    button:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 769px) {
    width: 80%;
    .welcome-content {
      width: 100%;
    }
  }
  @media (max-width: 574px) {
    width: 80%;
    justify-content: center;
    .welcome-content {
      font-size: 1.3rem;

      button {
        width: 10rem;
        height: 2.5rem;
      }
    }
  }
`;

export default SContainer;

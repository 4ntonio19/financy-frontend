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
    .first {
      margin-top: 8rem;
    }
  }

  .register-content {
    font-family: Montserrat;
    font-size: 1.5rem;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    p {
      margin-top: 8rem;
    }
    button:hover {
      cursor: pointer;
    }
  }
`;

export default SContainer;

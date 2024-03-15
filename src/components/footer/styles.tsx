import styled from "styled-components";
const SFooter = styled.footer`
  background-color: #3c3c3c;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 5rem;
  padding: 1rem;
  p {
    color: white;
    font-size: 1rem;
    font-family: Montserrat;
  }
  @media (max-width: 410px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

export default SFooter;

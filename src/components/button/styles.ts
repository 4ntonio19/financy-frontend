import styled from "styled-components";

const SButton = styled.button`
  width: 12rem;
  height: 3rem;
  border-radius: 10px;
  border-color: #3a7e52;
  color: white;
  background-color: #3a7e52;
  padding: 2px;
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default SButton;

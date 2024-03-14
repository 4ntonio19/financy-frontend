import styled from "styled-components";

const SContainer = styled.body`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  @media (min-height: 569px) {
    position: fixed;
    bottom: 0;
  }
`;

export default SContainer;

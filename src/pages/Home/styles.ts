import styled from "styled-components";
import BgdImg from "../../assets/background.png";
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
    background-image: url(${BgdImg});
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: auto;
  }
  @media (min-height: 569px) {
    position: fixed;
    bottom: 0;
  }
  @media (max-width: 769px) {
    .content {
      background-image: none;
      margin: 10px;
    }
  }
`;

export default SContainer;

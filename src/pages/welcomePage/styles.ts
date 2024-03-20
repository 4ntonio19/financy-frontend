import styled from "styled-components";
import BgdLarge from "../../assets/background-1280.png";
import BgdMedim from "../../assets/background-768.png";
import BgdSmall from "../../assets/background-430.png";
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
    background-image: url(${BgdLarge});
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: auto;
  }

  position: fixed;
  bottom: 0;

  @media (max-width: 430px) {
    .content {
      background-image: url(${BgdSmall});
      margin: 10px;
    }
  }
  @media (min-width: 768px) {
    .content {
      background-image: url(${BgdMedim});
      margin: 10px;
    }
  }
  @media (min-width: 1024px) {
    .content {
      background-image: url(${BgdLarge});
      margin: 10px;
    }
  }
`;

export default SContainer;

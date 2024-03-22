import styled from "styled-components";

export const SContainer = styled.div`
  font-family: Montserrat;

  width: 80%;
  display: flex;
  padding-top: 2rem;

  .home-header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .welcome-text {
      font-size: 1rem;
    }
  }
  @media (max-width: 823px) {
    .home-header {
      .welcome-text {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 430px) {
    .home-header {
      .welcome-text {
        font-size: 0.65rem;
      }
    }
  }
`;

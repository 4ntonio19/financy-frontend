import styled from "styled-components";

const SHeader = styled.header`
  background-color: #3c3c3c;
  color: white;
  width: 100%;
  height: 4.5rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  font-family: Montserrat;
  .container {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    p {
      font-size: 1.5rem;
    }
    a {
      cursor: pointer;
    }
    a:link {
      color: white;
    }

    a:visited {
      color: white;
    }
  }

  .title-header {
    display: flex;
    align-items: center;
    width: auto;
    gap: 4px;
    h1 {
      font-size: 2.5rem;
      font-style: italic;
      font-family: Montserrat;
      font-weight: 500;
    }
    img {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (max-width: 574px) {
    .container {
      p {
        font-size: 1.2rem;
      }
    }

    .title-header {
      gap: 4px;
      width: auto;
      h1 {
        font-size: 1.5rem;
        width: auto;
      }
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
  @media (max-width: 407px) {
    .container {
      gap: 5px;
      p {
        font-size: 1rem;
      }
    }
    .title-header {
      width: auto;
      h1 {
        font-size: 1.2rem;
      }
    }
  }
  @media (max-width: 345px) {
    .container {
      gap: 5px;
      p {
        font-size: 0.8rem;
      }
    }
    .title-header {
      width: auto;
      h1 {
        font-size: 1rem;
      }
    }
  }
`;

export default SHeader;

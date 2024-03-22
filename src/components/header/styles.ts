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

  .list-links {
    display: flex;
    list-style: none;
    gap: 20px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .link-transaction {
      border-left: 3px solid white;
      border-right: 3px solid white;
      padding: 0 20px 0 20px;
    }
  }

  .logo-perfil {
    width: auto;
    height: auto;
    img {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (max-width: 1040px) {
    .title-header {
      h1 {
        font-size: 2rem;
      }

      img {
        width: 1.8rem;
        height: 1.8rem;
      }
    }

    .list-links {
      gap: 10px;
      li > a > p {
        font-size: 1.3rem;
      }
      .link-transaction {
        border-left: 3px solid white;
        border-right: 3px solid white;
        padding: 0 10px 0 10px;
      }
    }

    .logo-perfil {
      img {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }

  @media (max-width: 832px) {
    .title-header {
      h1 {
        font-size: 1.6rem;
      }

      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
  @media (max-width: 768px) {
    .title-header {
      h1 {
        font-size: 1.5rem;
      }

      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    .list-links {
      gap: 10px;
      li > a > p {
        font-size: 1rem;
      }
      .link-transaction {
        border-left: 3px solid white;
        border-right: 3px solid white;
        padding: 0 10px 0 10px;
      }
    }

    .logo-perfil {
      img {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }
  @media (max-width: 666px) {
    .title-header {
      h1 {
        font-size: 1.2rem;
      }

      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }

  @media (max-width: 618px) {
    .container {
      flex-direction: column;
      p {
        font-size: 1.2rem;
      }
      gap: 0px;
    }
    .list-links {
      gap: 10px;
      height: 1.5rem;
      li > a > p {
        font-size: 1rem;
      }
      .link-transaction {
        border-left: 3px solid white;
        border-right: 3px solid white;
        padding: 0 10px 0 10px;
      }
    }

    .logo-perfil {
      img {
        width: 1.2rem;
        height: 1.2rem;
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

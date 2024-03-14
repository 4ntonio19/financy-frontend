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
    p {
      font-size: 1.5rem;
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
`;

export default SHeader;

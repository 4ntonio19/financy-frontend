import styled from "styled-components"

export const ContainerHome = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;

  .home-content{
    width: 90%;
    margin: 3rem auto auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }


  header{
    display: flex;
    justify-content: space-between;
    h1{
      color: ${({ theme }) => theme.colors.black._900};
      font-size: 2rem;
      line-height: 2.2rem;
    }
  }

  .container-period{
    display: flex;
    gap: 8px;
  }
`

export const ContainerIndicators = styled.section`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;

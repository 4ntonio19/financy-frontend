import styled from "styled-components"

export const ContainerHome = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;

  .home-content{
    width: 90%;
    margin: 3rem auto 1rem auto;
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

export const SSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  &.transactions-section {
    grid-template-columns: 1fr 2.07fr;
  }
`;
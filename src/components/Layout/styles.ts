import styled from "styled-components"

export const ContainerLayout = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ContainerHeader = styled.header`
  width: 100%;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
`

export const WrapperHeaderContent = styled.div`
  width: 90%;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;

  .container-logo{
    img{
      width: 10rem;
      height: 32px;
    }
  }

  nav {
    display: flex;
    align-items: center;
    width: 510px;
    height: 40px;
    gap: 4px;
    color: ${({ theme }) => theme.colors.gray._600};
    a {
      text-decoration: none;
      padding: 8px 12px;
      font-size: 1rem;
      font-weight: 600;
      line-height: 24px;
      
      &:visited{
        color: ${({ theme }) => theme.colors.gray._600};
      }
    }

    a.active{
      background-color: ${({ theme }) => theme.colors.gray._100};
      border-radius: 6px;
      color: ${({ theme }) => theme.colors.blue._600};
    }
  }

  .account-options{
    display: flex;
    align-items: center;
    gap: 1rem;

    button{
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      &:hover{
        cursor: pointer;
      }
    }
  }
`

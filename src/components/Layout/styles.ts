import styled from "styled-components"

export const ContainerLayout = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
`

export const ContainerHeader = styled.header`
  width: 100%;
  height: 4.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
`

export const WrapperHeaderContent = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .container-logo{
    img{
      width: 10rem;
      height: 2rem;
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


  .wrapper-user-menu {
    position: relative;

    .menu {
      right: 50%;
      padding: 0.5rem;
      border-radius: 0.5rem;
      position: absolute;
      list-style: none;
      background-color: ${({ theme }) => theme.colors.gray._200};
      li {
        font-size: 0.9rem;
        cursor: pointer;
        &:active {
          background-color: ${({ theme }) => theme.colors.gray._100};
        }
      }
    }
  }
  
  @media (max-width: 1024px) {
    .container-logo {
      img{
        width: 8rem;
        height: 2rem;
      }
    }

    a{
      font-size: 0.8rem;
    }

    .account-options {
      gap: 0.5rem;
    }
  }
`

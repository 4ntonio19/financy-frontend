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
  nav {
    display: flex;
    list-style: none;
    a {
      text-decoration: none;
      &:visited {
        color: black;
      }
    }
  }
`

import styled from "styled-components"

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
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

    &:visited {
      color: ${({ theme }) => theme.colors.gray._600};
    }
  }

  a.active {
    background-color: ${({ theme }) => theme.colors.gray._100};
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.blue._600};
  }
`

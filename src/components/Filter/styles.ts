import styled from "styled-components"

export const WrapperFilter = styled.ul`
  width: fit-content;
  border-radius: 1rem;
  list-style: none;
  display: flex;
  align-items: center;
  li {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray._600};
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray._200};
    cursor: pointer;
    svg {
      color: black;
    }

    &:first-child {
      border-bottom-left-radius: 0.5rem;
      border-top-left-radius: 0.5rem;
    }

    &:nth-child(4) {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }

    &:last-child {
      border-radius: 0.5rem;
      margin-left: 1rem;
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.gray._100};
      color: ${({ theme }) => theme.colors.blue._600};
      svg {
        color: ${({ theme }) => theme.colors.blue._600};
      }
    }
  }

  @media (max-width: 768px) {
    li {
        font-size: 0.8rem;
        padding: 0.4rem 0.9rem;
    }
  }

  @media (max-width: 610px) {
    li {
      font-size: 0.75rem;
      padding: 0.25rem 0.8rem;
      &:last-child {
        border-radius: 0.5rem;
        margin-left: 0.5rem;
      }
    }
  }

  @media (max-width: 380px) {
    li {
      padding: 0.25rem 0.375rem;
    }
  }
`

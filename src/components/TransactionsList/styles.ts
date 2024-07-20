import styled from "styled-components"

export const ContainerTransactionsList = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.gray._200};

  overflow-x: auto;
  header {
    margin: 1.5rem;
    display: flex;
    flex-direction: column;
    span {
      font-weight: 600;
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: ${({ theme }) => theme.colors.black._900};
    }

    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.gray._600};
    }
  }

  table {
    border-collapse: collapse;
    text-align: left;
    overflow-x: hidden;
    th,
    td {
      padding: 0.875rem 1.5rem;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.gray._600};
    }
    .income {
        color: ${({ theme }) => theme.colors.green._500};
    }

    .expense {
      color: ${({ theme }) => theme.colors.black._900};
    }

    th {
      color: ${({ theme }) => theme.colors.gray._600};
      font-size: 0.875rem;
      font-weight: 300;
      padding: 0.5rem 1.5rem;
      background-color: ${({ theme }) => theme.colors.gray._50};
      border: 1px solid ${({ theme }) => theme.colors.gray._200};
    }
  }

  & > div {
    display: none;
  }
`

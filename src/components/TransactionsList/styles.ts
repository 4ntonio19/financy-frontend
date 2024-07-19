import styled from "styled-components";

export const ContainerTransactionsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.gray._200};
    header{
        margin: 1.5rem;
        display: flex;
        flex-direction: column;
        span{
            font-weight: 600;
            font-size: 1.125rem;
            line-height: 1.75rem;
            color:  ${({ theme }) => theme.colors.black._900};
        }

        p {
            font-size: 0.875rem;
            line-height: 1.25rem;
            color: ${({ theme }) => theme.colors.gray._600};
        }
    }

    & > div {
    display: none;
  }
`;
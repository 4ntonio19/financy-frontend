import styled from "styled-components";

export const ContainerTransactions = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    width: 24rem;
    padding: 1.25rem;
    border: 1px solid ${({ theme }) => theme.colors.gray._200};
    border-radius: 12px;
    display: flex;
    gap: 0.75rem;

    &:hover{
        cursor: pointer;
    }

    .container-icon {
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;

        svg{
            width: 1.5rem;
            max-width: 1.5rem;
            height: 1.5rem;
            max-height: 1.5rem;
        }
    }

    .container-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2px;

        span {
            font-size: 1rem;
            line-height: 24px;
            color: ${({ theme }) => theme.colors.gray._900};
            font-weight: 600;
        }

        p {
            font-size: 0.875rem;
            line-height: 20px;
            color: ${({ theme }) => theme.colors.gray._600};
        }
    }
`;
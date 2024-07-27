import styled from "styled-components";

export const ContainerField = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    label {
        color: ${({ theme }) => theme.colors.gray._600};
        font-weight: 500;
        font-size: 1.1rem;
    }

    input, select {
        width: 100%;
        height: 2.2rem;
        border-radius: 0.4rem;
        border: 1px solid ${({ theme }) => theme.colors.blue._600};
        padding: 0.3rem;

        &::placeholder {
            font-size: 0.8rem;
            color: ${({ theme }) => theme.colors.gray._600};
            font-style: italic;
        }

        &:focus {
            outline: none;
            border: 2px solid ${({ theme }) => theme.colors.blue._600};
        }
    }
`;

export const ErrorMessage = styled.p`
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.red._500};
`;
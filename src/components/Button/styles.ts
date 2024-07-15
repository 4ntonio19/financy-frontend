import styled from "styled-components";

export const SButton = styled.button`
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    padding: 6px 14px;
    gap: 0.5rem;
    font-size: 0.9rem;
    line-height: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray._600};

    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray._200};
    svg{
        width: 1.4rem;
        height: 1.4rem;
        color: black;
    }

    &:hover{
        color: ${({ theme }) => theme.colors.blue._600};
        cursor: pointer;
        svg{
         color: ${({ theme }) => theme.colors.blue._600};
        }
    }

`
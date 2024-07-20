import styled from "styled-components";

export const WrapperFilter = styled.ul`
    width: fit-content;
    border-radius: 16px;
    list-style: none;
    display: flex;
    align-items: center;
    li{
        display: flex;
        align-items: center;
        gap: 5px;
        background-color:  ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.gray._600};
        font-size: 0.9rem;
        font-weight: 600;
        padding: 8px 16px;
        border: 1px solid ${({ theme }) => theme.colors.gray._200};
        cursor: pointer;
        svg{
        width: 1.3rem;
        height: 1.3rem;
        color: black;
        }

        &:first-child {
            border-bottom-left-radius: 8px;
            border-top-left-radius: 8px;
        }

        &:nth-child(4) {
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
        }

        &:last-child {
            border-radius: 8px;
            margin-left: 1rem;
        }

        &.active {
            background-color: ${({ theme }) => theme.colors.gray._100};
            color: ${({ theme }) => theme.colors.blue._600};
            svg{
                color: ${({ theme }) => theme.colors.blue._600};
            }
        }
    }

    @media (max-width: 768px) {
        li {
            font-size: 0.75rem;
            padding: 4px 12px;
            &:last-child {
            border-radius: 8px;
            margin-left: 0.5rem;
        }
        }
    }
`;
import styled from "styled-components"

export const CardContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.gray._200};
    border-radius: 12px;
  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray._600};
    width: 100%;
  }

  section{
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  span {
    font-size: 2rem;
    line-height: 2.3rem;
    font-weight: 600;
    flex: 1;
  }

  @media (max-width: 1280px) {
    padding: 1rem;
    span {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 1100px) {
    padding: 1rem;
    span {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 1024px) {
    padding: 1rem;
    span {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    span {
      font-size: 1.7rem;
    }
  }

  .container-percentage {
    display: flex;
    gap: 4px;
    padding: 2px 8px;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.gray._200};
    border-radius: 6px;
    svg {
      width: 0.75rem;
      max-width: 0.75rem;
      height: 0.75rem;
      max-height: 0.75rem;
    }

    p {
      color: ${({ theme }) => theme.colors.gray._950};
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 20px;
    }
  }


`

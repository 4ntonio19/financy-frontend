import styled from "styled-components";

export const SContainer = styled.div`
  font-weight: 500;
  margin-right: 10px;
  p {
    font-size: 1rem;
  }

  @media (max-width: 820px) {
    p {
      font-size: 0.9rem;
    }
  }
  @media (min-width: 747px) {
    p {
      border-bottom: 1px solid black;
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 430px) {
    p {
      font-size: 0.5rem;
    }
  }
`;

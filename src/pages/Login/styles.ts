import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
object-fit: cover;
`

export const WrapperForm = styled.section`
border-radius: 0.5rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 2.5rem;
padding: 2rem;
width: 28rem;
height: 28rem;


.wrapper-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span {
        font-size: 2.5rem;
    }
}

 span {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors._black};
  }

  .form-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;


    .wrapper-input {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    input {
        height: 3rem;
        border: none;
        border: 1px solid ${({ theme }) => theme.colors.blue._600};
        border-radius: 6px;
        padding: 0 1.2rem;

        &:focus {
            outline:  none;
            border: 2px solid ${({ theme }) => theme.colors.blue._600};

        }
    }

    button {
        align-self: center;
        background-color: ${({ theme }) => theme.colors.blue._600};
        border-color: ${({ theme }) => theme.colors.blue._600};
        color: #FFFFFF;
        font-weight: 600;
        box-shadow: none;
        height: 2.8rem;
        width: 100%;
        border-radius: 6px;
        font-size: 1.2rem;
        cursor: pointer;
    }
    .error-message {
        color: ${({ theme }) => theme.colors.red._500};
        font-size: 0.8rem;
    }
  }

`
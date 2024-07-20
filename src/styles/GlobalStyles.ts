import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    @media (max-width: 1024px){
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 768px){
        html {
            font-size: 87.5%;
        }
    }

    body{
        background-color: #f9fafb;
    }

`

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
    }

    #root, html {
        width: 100vw;
        height: 100vh;

        background: ${({ theme }) => theme.dynamic.gray600};
        color: ${({ theme }) => theme.dynamic.gray100};

        font-family: "Inter", helvetica, sans-serif;
        font-size: 400;
        line-height: 1.4
    }

    input, button, textarea {
        font-family: "Inter", helvetica, sans-serif;
        font-size: 400;
        line-height: 1.4
    }

    button { 
        cursor: pointer
    }
`;

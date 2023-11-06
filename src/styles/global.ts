import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  body {
    background-color: ${(props) => props.theme.background};
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }
`

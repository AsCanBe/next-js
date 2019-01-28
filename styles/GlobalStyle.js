import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:       border-box;
    -moz-box-sizing:  border-box;
  }
  body {
    font-family:  'Open Sans', sans-serif;
    margin:       0;
  }
  body, button {
    font-size:  1.2rem;
  }
  .container {
    padding:  1rem 2rem;
  }
  a {
    font-weight:  700;
  }
  h2 {
    font-size:  1.4rem;
  }
  &.dark {
    background-color:   #1d1840;
    color:              #ffe8b5;
  }
  &.light {
    h2 {
      color:  #28262C;
    }
  }
  &.centered {
    text-align:   center;
  }
`

export default GlobalStyle

import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:       border-box;
    -moz-box-sizing:  border-box;
  }
  body {
    font-family:  'Open Sans', sans-serif;
    margin:       0;
    position:     relative;
  }
  h1, h2 {
    color:  #3D348B;
  }
  body, button, input, textarea {
    font-size:  1.2rem;
  }
  a {
    font-weight:  700;
  }
  h2 {
    font-size:  1.4rem;
  }
  input, textarea {
    width:          100%;
    padding:        .5rem;
    border-radius:  .5rem;
    border:         solid 2px #d9d9d9;
    margin-bottom:  1rem;
  }
  textarea {
    height:   109px;
  }
  label {
    margin-bottom:  .3rem;
    display:        inline-block;
    font-weight:    700;
  }
  button {
    padding:            1rem 2rem;
    background-image:   linear-gradient(to top right, #3D348B, #7765E3);
    color:              #fff;
    border-radius:      50px;
    font-weight:        700;
  }
  .container {
    padding:  1rem 2rem;
  }
  &.centered {
    text-align:   center;
  }
  &.dark {
    background-color:   #f2f2f2;
  }
  &.light {
    h2 {
      color:  #28262C;
    }
  }
`

export default GlobalStyle

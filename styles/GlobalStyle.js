import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:       border-box;
    -moz-box-sizing:  border-box;
  }
  body {
    width:            100%;
    font-family:      'Heebo', sans-serif;
    letter-spacing:   .2px;
    margin:           0;
    color:            #333;
  }
  p {
    line-height:                  1.5;
    font-weight:                  300;
    font-size:                    1.1rem;
    @media (min-width: 768px) {
      font-size:                  .9rem;
    }
  }
  h1, h2, h4 {
    font-weight:  700;
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
  form {
    @media (min-width: 768px) {
      width:                      60%;
      margin:                     0 auto;
    }
  }
  input, textarea {
    width:          100%;
    padding:        .5rem;
    border-radius:  .5rem;
    border:         solid 1px #ccc;
    margin-bottom:  1rem;
  }
  textarea {
    height:   164px;
  }
  label {
    margin-bottom:  .3rem;
    display:        inline-block;
    font-weight:    700;
  }
  button {
    padding:                      1rem 2rem;
    background-color:             #3D348B;
    color:                        #fff;
    border-radius:                50px;
    font-weight:                  700;
    cursor:                       pointer;
    @media (min-width: 768px) {
      :hover {
        background-color:         #2d2666;
      }
    }
  }

  &.wrapper {
    @media (min-width: 1200px) {
      width:                      100%;
      padding:                    0 15%;
    }
  }
  &.padded {
    padding:  1rem 2rem;
  }
  &.centered {
    text-align:   center;
  }
  &.grey {
    background-color:   #f2f2f2;
  }
`

export default GlobalStyle

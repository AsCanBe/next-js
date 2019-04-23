import { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
  * {
    box-sizing:       border-box;
    -moz-box-sizing:  border-box;
  }
  body {
    margin: 0;
  }
  span {
    display: block;
  }
`

export default Reset

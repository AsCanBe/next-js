import { createGlobalStyle } from 'styled-components'
import { Colors, Tones, fontSizes } from './variables'

const { purple } = Colors;
const { darkGrey } = Tones;
const { md, lg, xl } = fontSizes;

export const Typography = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    color:       ${darkGrey};
    line-height: 1.6;

    p {
      font-size:   ${md};
      font-weight: 300;

      a {
        color: ${purple};
      }
    }

    a {
      text-decoration: none;
      font-size:       ${md};
    }

    h1 {
      font-size: ${xl};
    }

    h2 {
      font-size: ${lg};
    }

    h1, h2, h4 {
      font-weight: 400;
    }
  }
`

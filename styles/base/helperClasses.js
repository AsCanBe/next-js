import { createGlobalStyle } from 'styled-components'

import { Colors, Tones } from './variables'

const { white, purple } = Colors;
const { lightGrey } = Tones;

const HelperClasses = createGlobalStyle`
  .wrapper {
    @media (min-width: 1200px) {
      width:   100%;
      padding: 0 15%;
    }
  }

  .padded {
    padding: 1rem 2rem;
  }

  .flexbox {
    &--mobile {
      display:   flex;
    }
    &--desktop {
      @media (min-width: 768px) {
        display: flex;
      }
    }
  }

  .section-title {
    text-align: center;
  }

  .align {
    &--center {
      text-align: center;
    }
  }

  .grey {
    background-color: ${lightGrey};
  }

  .purple {
    background-color: ${purple};
    color:            ${white};
  }
`

export default HelperClasses

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
    > div {
      flex-basis: 50%;
    }
  }

  .verticalCenter {
    flex-direction:  column;
    justify-content: center;
  }

  .section-title {
    text-align: center;
  }

  .align {
    &--center {
      text-align:     center;
      &--mobile {
        text-align:   center;
        @media (min-width: 768px) {
          text-align: left;
        }
      }
    }
  }

  .quote {
    font-weight: 400;
    padding: 1rem 4rem;
    > span {
      font-size: .9rem;
      font-weight: 400;
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

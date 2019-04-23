import styled from 'styled-components'
import HelperClasses from '../styles/helperClasses'

import { Colors } from '../styles/variables'

const { white } = Colors;

const Footer = () => (
  <FooterWrapper
    className="wrapper"
    role="contentinfo"
  >
    <div className="flexbox--desktop">
      <div 
        id="info"
        className="padded align--center--mobile"
      >
        <span>Copyright © Helianthis Counselling 2019.</span>
        <span>Part of the <a href="http://encorewellness.co.uk/" target="_blank">Encore Wellness</a> network:</span>
        <span>
          <a href="http://encorewellness.co.uk/" target="_blank">
            <img
              src="/static/encore-wellness.png"
              alt="Encore Wellness Logo"
            />
          </a>
        </span>
      </div>
      <div role="list">
        <address
          className="padded align--center--mobile"
          role="listitem"
        >
          <span><strong>Stowmarket</strong></span>
          <span>Helianthus Counselling</span>
          <span>Church Road</span>
          <span>Battisford, Stowmarket, Suffolk</span>
          <span>IP14 2HF</span>
        </address>
        <address
          className="padded align--center--mobile"
          role="listitem"
        >
          <span><strong>Needham Market</strong></span>
          <span>Helianthus Counselling</span>
          <span>Encore Wellness</span>
          <span>20 High Street</span>
          <span>Needham Market, Suffolk</span>
          <span>IP6 8AP</span>
        </address>
      </div>
    </div>
    <ByLine className="align--center">
      Website built with ❤️ by <a href="mailto:ghrodwell@gmail.com" target="_blank">Guy Hunter-Rodwell</a>
    </ByLine>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color:   #28262C;
  color:              ${white};
  a {
    color:            #fff;
  }
  #info {
    img {
      width:          150px;
      display:        block;
      margin:         1rem auto 0 auto;
      @media (min-width: 768px) {
        margin:       1rem 0 0 0;
      }
    }
  }
  address {
    font-weight:      300;
    span {
      display:        block;
    }
  }
`

const ByLine = styled.div`
  padding: 1rem 0;
`

export default Footer

import styled from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'

const Footer = () => (
  <FooterWrapper className="wrapper">
    <div className="padded">
      <p>Copyright © Helianthis Counselling 2019.</p>
      Part of the <a href="http://encorewellness.co.uk/" target="_blank">Encore Wellness</a> network:
      <a href="http://encorewellness.co.uk/" target="_blank"><img src="/static/encore-wellness.png" /></a>
    </div>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color:   #28262C;
  color:              #fff;
  img {
    width:            150px;
    display:          block;
    margin:           1rem 0;
  }
  a {
    color:            #fff;
  }
`

export default Footer

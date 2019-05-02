import styled from 'styled-components';
import CookieContent from 'react-cookie-consent';

import Meta from './Meta';
import Footer from './Footer';

export default (props) => (
  <BodyWrapper>
    <div>
      <Meta />
      {props.children}
      <CookieContent
        buttonStyle={{ borderRadius: '.4rem' }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieContent>
      <Footer />
    </div>
  </BodyWrapper>
)

const BodyWrapper = styled.div`
  width: 100%;
`

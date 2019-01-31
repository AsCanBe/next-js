import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

export default (props) => (
  <BodyWrapper>
    <Header />
    <ContentWrapper>
      {props.children}
      <Footer />
    </ContentWrapper>
  </BodyWrapper>
)

const BodyWrapper = styled.div`
  overflow-x:   hidden;
`

const ContentWrapper = styled.div`
  position:   absolute;
  top:        67px;
`

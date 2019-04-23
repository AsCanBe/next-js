import styled from 'styled-components'
import Footer from './Footer'

export default (props) => (
  <BodyWrapper>
    <div>
      {props.children}
      <Footer />
    </div>
  </BodyWrapper>
)

const BodyWrapper = styled.div`
  width: 100%;
`

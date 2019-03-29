import styled from 'styled-components'
import Head from './Head'
import Footer from './Footer'

export default (props) => (
  <div>
    <Head />
    <BodyWrapper>
      <div>
        {props.children}
        <Footer />
      </div>
    </BodyWrapper>
  </div>
)

const BodyWrapper = styled.div`
  width: 100%;
`

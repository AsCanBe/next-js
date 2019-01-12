import styled from 'styled-components'
import Header from './Header'

const Wrapper = styled.div`
  
`

const Layout = (props) => (
  <Wrapper>
    <Header />
    {props.children}
  </Wrapper>
)

export default Layout

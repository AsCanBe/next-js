import styled from 'styled-components'
import Layout from '../components/Layout'
import GlobalStyle from '../styles/GlobalStyle'

export default () => (
  <Layout>
    <div>
      <GlobalStyle />
      <div className="wrapper grey">
        <div className="container padded centered">
          <h2>Pricing</h2>
          <p>£40 per session</p>
          <p>£20 per session for students and unwaged (with verification)</p>
          <p>Your introductory session will be completely free of charge. It is usual to have one session per week thereafter, which each last for 50 minutes, but there is no upper limit on the amount of sessions you can choose to attend.</p>
          <h2>Availability</h2>
          <p>7.30am – 5.30pm, Monday - Friday</p>
          <p>(Some evenings are available)</p>
          <h2>Types of Clients</h2>
          <p>All adults</p>
        </div>
      </div>
      <div className="wrapper">
        <TypesOfSession>
          <h2>Types of Session</h2>
          <FlexWrapper>
            <div>
              <img src="/static/smiley-face.png" />
              <h4>Face to Face</h4>
            </div>
            <div>          
              <img src="/static/phone-large.png" />
              <h4>Over the Phone</h4>
            </div>
            <div>
              <img src="/static/skype.png" />
              <h4>Via Skype</h4>
            </div>
          </FlexWrapper>
          <p><strong>Click <a href="/contact">here</a> to book an appointment.</strong></p>
        </TypesOfSession>
      </div>
    </div>
  </Layout>
)

const TypesOfSession = styled.div`
  text-align:       center;
  h4 {
    margin:         .5rem 0 3rem 0;
  }
  img {
    width:          118px;
    height:         118px;
  }
`

const FlexWrapper = styled.div`
  @media (min-width: 768px) {
    display:                    flex;
    justify-content:            space-around;
  }
`

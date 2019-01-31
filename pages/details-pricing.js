import styled from 'styled-components'
import Layout from '../components/Layout'
import GlobalStyle from '../styles/GlobalStyle'
// import Head from '../components/Head'

export default () => (
  <Layout>
    <GlobalStyle />
    <div className="container dark centered">
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
    <TypesOfSession className="container">
      <h2>Types of Session</h2>
      <img src="/static/smiley-face.png" />
      <h4>Face to Face</h4>
      <img src="/static/phone-large.png" />
      <h4>Over the Phone</h4>
      <img src="/static/skype.png" />
      <h4>Via Skype</h4>
      <p><strong>Click <a href="/contact">here</a> to book an appointment.</strong></p>
    </TypesOfSession>
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

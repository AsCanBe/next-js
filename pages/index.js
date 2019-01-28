import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'
import GlobalStyle from '../styles/GlobalStyle'

export default class Index extends Component {
  constructor() {
    super()
    this.myRef = React.createRef();
  }

  scroll(ref) {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Main className="container centered">
          <Title>Helianthus Counselling</Title>
          <ProfilePic src="/static/carolyn-fordham.jpg" />
          <FindOutMore>
            <a onClick={() => {this.scroll(this.myRef)}} />
            <p>Find Out More</p>
            <img src="/static/down-arrow.png" />
          </FindOutMore>
        </Main>
        <div
          className="container light"
          id="about"
          ref={this.myRef}
        >
          <p><strong>Hi, my name's Carrie.</strong></p>
          <p>From here you can find out more about me and the Helianthus Counselling service in general, and contact me by phone, text or email to arrange a consultation.</p>
          <p>As a <a href="https://www.bacp.co.uk/" target="_blank">BACP (British Association of Counsellors and Psychotherapists) registered counsellor</a>, I am fully qualified to practise, and always adhere to their ethical guidelines. I also attend Clinical Supervision regularly, ensuring that I am practising effectively and to the highest standard for each client.</p>
          <p>I practise with a Person-Centred or Client-Centred approach, and aim to create a warm, non-judgemental atmosphere in which <strong>you</strong> are considered the expert about your own feelings and emotions. Together, we will work to make sense of troubling difficulties, whether they be current or in the past. Person-centred counselling can be very effective for a wide range of issues, including depression, anxiety and grief. All sessions are completely confidential, and are on a strictly one-to-one basis.</p>
          <p>I offer both face-to-face and Skype sessions, and although I do not feel that email counselling offers the immediacy needed for therapy to be successful, I am open to an initial consultation via email if that makes you feel more comfortable.</p>
          <p>My profile on Counselling Directory can be found <a href="https://www.counselling-directory.org.uk/counsellors/carolyn-fordham" target="_blank">here</a>.</p>
        </div>
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
  }
}

const Title = styled.h1`
  margin:     0 0 1rem 0;
  font-size:  2rem;
`

const ProfilePic = styled.img`
  border-radius: 1rem;
  width:         100%;
`

const Main = styled.main`
  background-color:   #f2f2f2;
  color:              #3D348B;
  font-weight:        700;
  height:             calc(100vh - 67px);
`

const FindOutMore = styled.div`
  position:     relative;
  p {
    margin:     1rem 0;
  }
  img {
    width:  2rem;
  }
  a {
    position:   absolute;
    top:        0;
    right:      0;
    bottom:     0;
    left:       0;
  }
`

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

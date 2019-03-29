import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Head from '../components/Head'
import Main from '../components/Main'
import ContactForm from '../components/ContactForm'

import GlobalStyle from '../styles/GlobalStyle'
import Styles from '../components/Styles'

export default class Index extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <Styles />
        <Main scroll={this.scroll} />
        <div
          className="wrapper grey"
          id="about-me"
        >
          <Greeting className="padded flexbox--desktop">
            <div className="align--center">
              <ProfilePic src="../static/carolyn-fordham-200x200.png" />
            </div>
            <div>
              <h2>Hi, my name's Carrie.</h2>
              <p>From here you can find out more about me and the Helianthus Counselling service in general, and contact me by phone, text or email to arrange a consultation.</p>
            </div>
          </Greeting>
        </div>
        <div className="wrapper">
          <div className="padded">
            <h2 className="section-title">About Me</h2>
            <p>As a <a href="https://www.bacp.co.uk/" target="_blank">BACP (British Association of Counsellors and Psychotherapists) registered counsellor</a>, I am fully qualified to practise, and always adhere to their ethical guidelines. I also attend Clinical Supervision regularly, ensuring that I am practising effectively and to the highest standard for each client.</p>
            <p>I practise with a Person-Centred or Client-Centred approach, and aim to create a warm, non-judgemental atmosphere in which <i>you</i> are considered the expert about your own feelings and emotions. Together, we will work to make sense of troubling difficulties, whether they be current or in the past. Person-centred counselling can be very effective for a wide range of issues, including depression, anxiety and grief. All sessions are completely confidential, and are on a strictly one-to-one basis.</p>
            <p>I offer both face-to-face and Skype sessions, and although I do not feel that email counselling offers the immediacy needed for therapy to be successful, I am open to an initial consultation via email if that makes you feel more comfortable.</p>
            <p>My profile on Counselling Directory can be found <a href="https://www.counselling-directory.org.uk/counsellors/carolyn-fordham" target="_blank">here</a>.</p>
          </div>
        </div>
        <div id="details-and-pricing">
          <div className="wrapper purple">
            <div className="padded align--center">
              <h2 className="section-title">Pricing</h2>
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
          <div className="wrapper grey">
            <TypesOfSession className="padded">
              <h2 className="section-title">Types of Session</h2>
              <FlexWrapper className="flexbox">
                <div>
                  <img src="/static/face-to-face.png" />
                  <p>Face to Face</p>
                </div>
                <div>          
                  <img src="/static/phone.png" />
                  <p>Over the Phone</p>
                </div>
                <div>
                  <img src="/static/skype.png" />
                  <p>Via Skype</p>
                </div>
              </FlexWrapper>
            </TypesOfSession>
          </div>
        </div>
        <div
          className="wrapper"
          id="get-in-touch"
        >
          <ContactForm />
        </div>
      </Layout>
    )
  }
}

const Greeting = styled.div`
  @media (min-width: 768px) {
    h2 {
      text-align:                 left;
    }
  }
`

const ProfilePic = styled.img`
  border-radius:                50%;
  width:                        80%;
  @media (min-width: 768px) {
    width:                      auto;
    margin:                     1rem 2rem 1rem 0;
  }
`

const TypesOfSession = styled.div`
  text-align:       center;
  img {
    width:          118px;
    height:         118px;
  }
`

const FlexWrapper = styled.div`
  @media (min-width: 768px) {
    justify-content:            space-around;
  }
`

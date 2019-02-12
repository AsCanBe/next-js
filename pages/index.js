import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'
import GlobalStyle from '../styles/GlobalStyle'
import Head from '../components/Head'

export default class Index extends Component {
  constructor() {
    super()
    this.myRef = React.createRef();
  }

  scroll(ref) {
    ref.current.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <Head />
        <MainWrapper>
          <Overlay className="wrapper">
            <Main className="padded centered">
              <h1>Helianthus Counselling</h1>
              <p>a person-centred therapy service in Needham Market & Stowmarket, within easy reach of Ipswich & Bury St Edmunds.</p>
              <FindOutMore ref={this.myRef}>
                <a onClick={() => {this.scroll(this.myRef)}} />
                <p>Find Out More</p>
                <svg height="20" width="40">
                  <path d="M0 0 L40 0 L20 20 Z" fill="#6d3eda" />
                </svg>
              </FindOutMore>
            </Main>
          </Overlay>
        </MainWrapper>
        <div className="wrapper">
          <div className="padded">
            <ProfilePic src="../static/carolyn-fordham.jpg" />
            <p><strong>Hi, my name's Carrie.</strong></p>
            <p>From here you can find out more about me and the Helianthus Counselling service in general, and contact me by phone, text or email to arrange a consultation.</p>
            <p>As a <a href="https://www.bacp.co.uk/" target="_blank">BACP (British Association of Counsellors and Psychotherapists) registered counsellor</a>, I am fully qualified to practise, and always adhere to their ethical guidelines. I also attend Clinical Supervision regularly, ensuring that I am practising effectively and to the highest standard for each client.</p>
            <p>I practise with a Person-Centred or Client-Centred approach, and aim to create a warm, non-judgemental atmosphere in which <strong>you</strong> are considered the expert about your own feelings and emotions. Together, we will work to make sense of troubling difficulties, whether they be current or in the past. Person-centred counselling can be very effective for a wide range of issues, including depression, anxiety and grief. All sessions are completely confidential, and are on a strictly one-to-one basis.</p>
            <p>I offer both face-to-face and Skype sessions, and although I do not feel that email counselling offers the immediacy needed for therapy to be successful, I am open to an initial consultation via email if that makes you feel more comfortable.</p>
            <p>My profile on Counselling Directory can be found <a href="https://www.counselling-directory.org.uk/counsellors/carolyn-fordham" target="_blank">here</a>.</p>
          </div>
        </div>
      </Layout>
    )
  }
}

const MainWrapper = styled.div`
  background-image:     url('../static/sky-bg.png');
  background-size:      cover;
  background-position:  center;
  background-repeat:    no-repeat;
  z-index:              0;
`

const Main = styled.main`
  color:              #5d29d5;
  min-height:         calc(100vh - 67px);
  position:           relative;
  display:            flex;
  flex-direction:     column;
  justify-content:    center;
  h1 {
    position:         relative;
    z-index:          1;
    font-size:        3rem;
    line-height:      1;
  }
  p {
    z-index:          1;
    font-weight:      400;
  }
`

const Overlay = styled.div`
  background-color:   rgba(255,255,255,.4);
  width:              100%;
  height:             100%;
`

const ProfilePic = styled.img`
  border-radius:                1rem;
  width:                        100%;
  @media (min-width: 768px) {
    width:                      auto;
    float:                      left;
    margin:                     1rem 2rem 1rem 0;
  }
`

const FindOutMore = styled.div`
  position:                     absolute;
  bottom:                       2rem;
  left:                         50%;
  transform:                    translateX(-50%);
  p {
    margin:                     1rem 0 .5rem 0;
    font-size:                  .9rem;
  }
  img {
    width:                      2rem;
  }
  a {
    position:                   absolute;
    top:                        0;
    right:                      0;
    bottom:                     0;
    left:                       0;
  }
`

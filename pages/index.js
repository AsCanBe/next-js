import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'
import GlobalStyle from '../styles/GlobalStyle'

const Title = styled.h1`
  margin:     0 0 1rem 0;
  color:      #3D348B;
  font-size:  2rem;
`

const Headshot = styled.img`
  border-radius: 1rem;
  width:         100%;
`

const Main = styled.main`
  text-align:         center;
  background-color:   #f2f2f2;
  padding:            5rem 2rem 0 2rem;
  p {
    margin-bottom:    0;
    font-size:        1rem;
    font-weight:      400;
  }
`

const DownArrow = styled.img`
  width: 4rem;
`

export default () => (
  <Layout>
    <GlobalStyle />
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Main className="container">
      <Title>Helianthus Counselling</Title>
      <Headshot src="/static/carolyn-fordham.jpg" />
      <p>Find Out More</p>
      <DownArrow src="/static/down-arrow.png" />
    </Main>
  </Layout>
)

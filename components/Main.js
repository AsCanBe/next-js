import React from 'react'
import styled from 'styled-components'

import Header from './Header'

import { Colors } from '../styles/base/variables'

const { white, purple } = Colors;

export default (props) => (
  <Main id="home">
    <Header scroll={props.scroll} />
    <div className="overlay flexbox--mobile wrapper">
      <div className="padded align--center">
        <h1>Helianthus Counselling</h1>
        <p>a person-centred therapy service in Needham Market & Stowmarket, within easy reach of Ipswich & Bury St Edmunds.</p>
        <FindOutMore>
          <a onClick={() => {this.scroll('about-me')}} />
          <p>Find Out More</p>
          <svg height="50" width="40">
            <path d="M10 35 L20 50 L20 0 L20 50 L30 35 L20 50 Z" stroke="#fff" strokeWidth="1"/>
          </svg>
        </FindOutMore>
      </div>
    </div>
  </Main>
)

const Main = styled.main`
  height:              100vh;
  background:          url('/static/support-bg.png');
  background-size:     cover;
  background-position: center;
  color:               ${white};

  .overlay {
    background-color:  ${purple};
    width:             100%;
    height:            100%;
    opacity:           .9;
    flex-direction:    column;
    align-items:       center;
    justify-content:   center;

    div {

    }
  }
`

const FindOutMore = styled.div`
  position:                     absolute;
  bottom:                       2rem;
  left:                         50%;
  transform:                    translateX(-50%);
  cursor:                       pointer;
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

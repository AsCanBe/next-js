import React from 'react'
import styled from 'styled-components'
// import Link from 'next/link'
import { Link, animateScroll as scroll } from 'react-scroll'

import { Colors } from '../styles/base/variables'

const { white, purple } = Colors;

export default (props) => (
  <Menu className="menu">
    <Link 
      to="/"
      smooth={true}
      onClick={props.handleMenu}
    >
      <a className="container">Home</a>
    </Link>
    <Link
      to="details-and-pricing"
      smooth={true}
      onClick={props.handleMenu}
    >
      <a className="container">Details & Pricing</a>
    </Link>
    <Link
      to="get-in-touch"
      smooth={true}
      onClick={props.handleMenu}
    >
      <a className="container">Get in Touch</a>
    </Link>
  </Menu>
)

const Menu = styled.div`
  position:                     absolute;
  width:                        100%;
  background-color:             rgba(255,255,255,.9);
  top:                          -100vh;
  left:                         0;
  height:                       100vh;
  flex-direction:               column;
  align-items:                  center;
  justify-content:              center;
  display:                      flex;
  z-index:                      10;
  transition:                   .9s;
  a {
    color:                      ${purple} !important;
    margin-bottom:              3rem;
    top:                        100vh;
    font-weight:                400;
  }
  img {
    visibility:                 hidden;
  }
  &.active {
    top:                        0;
  }
  @media (min-width: 992px) {
    background-color:           transparent;
    position:                   absolute;
    top:                        1rem;
    right:                      2rem;
    display:                    inline-block;
    vertical-align:             middle;
    height:                     auto;
    text-align:                 right;
    width:                      auto;
    a {
      color:                    ${white} !important;
      margin:                   0 0 0 5rem;
      height:                   100%;
      display:                  inline-flex;
      flex-direction:           column;
      justify-content:          center;
      font-size:                .9rem;
      transition:               .5s;
      border-bottom:            solid 1px transparent;
      padding-bottom:           1rem;
      :hover {
        padding-bottom:         0;
        border-bottom-color:    ${white};
      }
    }
  }
`

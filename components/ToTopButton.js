import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

import { Colors } from '../styles/variables';

const { white, purple } = Colors;

export default () => (
  <Button id="to-top-button">
    <svg height="18" width="28">
      <path
        d="M5 15 L15 5 L25 15"
        stroke={purple}
        fill="none"
        strokeWidth="1"
      />
    </svg>
    <span>Top</span>
    <Link
      to="home"
      smooth={true}
    />
  </Button>
)

const Button = styled.div`
  position:         fixed;
  right:            1rem;
  bottom:           1rem;
  background-color: ${white};
  color:            ${purple};
  border:           none;
  border-radius:    .4rem;
  box-shadow:       0 8px 30px rgba(0,0,0,.2);
  z-index:          10;
  font-size:        1rem;
  padding:          .7rem;
  font-weight:      300;
  text-align:       center;
  transition:       .2s;
  opacity:          0;
  span {
    display:        block;
  }
  svg {
    display:        block;
    margin:         0 auto;
  }
  a {
    position:       absolute;
    top:            0;
    right:          0;
    bottom:         0;
    left:           0;
    cursor:         pointer;
  }
  &.scrolled {
    opacity:        1;
  }
`
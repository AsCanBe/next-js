import React, { Component } from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import ToTopButton from './ToTopButton';

import { Colors } from '../styles/variables';

const { white, purple } = Colors;

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu(e) {
    e.preventDefault();
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
  }

  render() {
    return (
      <header role="banner">
        <NavWrapper>
          <NavBar
            className="padded"
            role="navigation"
            aria-label="Main Navigation"
          >
            <MainLogo
              src="/static/sunflower.png"
              alt="Helianthus Counselling Logo"
            />
            <HamburgerWrapper
              onClick={this.handleMenu}
              role="button"
              aria-label="Open close main menu on mobile device"
            >
              <span>Menu</span>
              <Hamburger className="hamburger">
                <div />
                <div />
                <div />
              </Hamburger>
            </HamburgerWrapper>
            <Menu
              scroll={this.props.scroll}
              handleMenu={this.handleMenu}
            />
          </NavBar>
        </NavWrapper>
        <ToTopButton
          className="hidden"
          role="button"
        />
      </header>
    )
  }
}

const NavWrapper = styled.div`
  z-index:    10;
  position:   absolute;
  width:      100%;
`

const NavBar = styled.nav`
  display:              flex;
  justify-content:      space-between;
  height:               67px;
  a {
    text-decoration:    none;
    color:              ${white};
  }
`

const HamburgerWrapper = styled.div`
  display:                      flex;
  align-items:                  center;
  cursor:                       pointer;
  span {
    font-size:                  1rem;
    font-weight:                300;
  }
  @media (min-width: 992px) {
    display:                    none;
  }
`

const Hamburger = styled.div`
  display:                      inline-block;
  position:                     relative;
  height:                       29px;
  width:                        33px;
  margin-left:                  .5rem;
  border:                       solid 1px ${white};
  border-radius:                .4rem;
  z-index:                      100;
  transition:                   .9s;
  div {
    height:                     1px;
    width:                      19px;
    background-color:           ${white};
    position:                   absolute;
    left:                       6px;
    transition:                 .9s;
    :nth-child(1) {
      top:                      8px;
    }
    :nth-child(2) {
      top:                      13px;
    }
    :nth-child(3) {
      bottom:                   8px;
    }
  }
  &.active {
    border-color:               ${purple};
    div {
      background-color:         ${purple};
      :nth-child(1) {
        transform:              rotate(45deg);
        top:                    13px
      }
      :nth-child(2) {
        background-color:       transparent;
      }
      :nth-child(3) {
        transform:              rotate(-45deg);
        bottom:                 13px;
      }
    }
  }
  @media (min-width: 992px) {
    display:                    none;
  }
`

const MainLogo = styled.img`
  max-width:  60px;
  height:     35px;
`

export default Header;

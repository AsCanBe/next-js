import Link from 'next/link'
import styled from 'styled-components'

const handleMenu = (e) => {
  e.preventDefault();
  document.querySelector('.menu').classList.toggle('active');
  document.querySelector('.hamburger').classList.toggle('active');
}

const Header = () => (
  <header>
    <NavWrapper className="wrapper">
      <NavBar className="padded">
        <CompanyLogo src="/static/sunflower.png" />
        <MenuWrapper onClick={handleMenu}>
          Menu
          <Hamburger className="hamburger">
            <div />
            <div />
            <div />
          </Hamburger>
        </MenuWrapper>
        <Menu className="menu">
          <Link href="/">
            <a className="container">Home</a>
          </Link>
          <Link href="/details-and-pricing">
            <a className="container">Details & Pricing</a>
          </Link>
          <Link href="/get-in-touch">
            <a className="container">Get in Touch</a>
          </Link>
        </Menu>
      </NavBar>
    </NavWrapper>
  </header>
)

const NavWrapper = styled.div`
  box-shadow:         0 .5rem 1rem rgba(0,0,0,.05);
  z-index:            10;
  background-color:   #fff;
  position:           fixed;
  width:              100%;
`

const NavBar = styled.nav`
  display:              flex;
  justify-content:      space-between;
  height:               67px;
  background-color:     #fff;
  a {
    text-decoration:    none;
  }
`

const MenuWrapper = styled.div`
  color:                        #6d3eda;
  display:                      flex;
  align-items:                  center;
  @media (min-width: 992px) {
    display:                    none;
  }
`

const Hamburger = styled.div`
  display:                      inline-block;
  position:                     relative;
  height:                       30px;
  width:                        33px;
  margin-left:                  .5rem;
  border:                       solid 2px #6d3eda;
  border-radius:                .4rem;
  z-index:                      100;
  transition:                   .9s;
  div {
    height:                     2px;
    width:                      1.2rem;
    background-color:           #6d3eda;
    position:                   absolute;
    left:                       .3rem;
    transition:                 .9s;
    :nth-child(1) {
      top:                      7px;
    }
    :nth-child(2) {
      top:                      12px;
    }
    :nth-child(3) {
      bottom:                   7px;
    }
  }
  &.active {
    border-color:               #fff;
    div {
      background-color:         #fff;
      :nth-child(1) {
        transform:              rotate(45deg);
        top:                    12px
      }
      :nth-child(2) {
        background-color:       transparent;
      }
      :nth-child(3) {
        transform:              rotate(-45deg);
        bottom:                 12px;
      }
    }
  }
  @media (min-width: 992px) {
    display:                    none;
  }
`

const Menu = styled.div`
  position:                     absolute;
  width:                        0;
  background-color:             rgba(109,62,218,.9);
  top:                          0;
  right:                        0;
  height:                       100vh;
  flex-direction:               column;
  align-items:                  center;
  justify-content:              center;
  display:                      flex;
  z-index:                      10;
  transition:                   .9s;
  a {
    color:                      transparent;
    margin-bottom:              3rem;
    top:                        100vh;
    font-weight:                400;
  }
  img {
    visibility:                 hidden;
  }
  a, img {
    transition:                 0s;
  }
  &.active {
    width:                      100%;
    a {
      color:                    #fff;
      transition:               .9s;
      :nth-child(1) {
        transition-delay:       .5s;
      }
      :nth-child(2) {
        transition-delay:       .4s;
      }
      :nth-child(3) {
        transition-delay:       .3s;
      }
    }
    img {
      visibility:               visible;
      transition-delay:       .2s;
    }
  }
  @media (min-width: 992px) {
    background-color:           transparent;
    position:                   static;
    display:                    inline-block;
    vertical-align:             middle;
    height:                     auto;
    text-align:                 right;
    width:                      auto;
    a {
      color:                    #6d3eda;
      margin:                   0 0 0 5rem;
      height:                   100%;
      display:                  inline-flex;
      flex-direction:           column;
      justify-content:          center;
      font-size:                .9rem;
    }
  }
`

const CompanyLogo = styled.img`
  max-width:  60px;
  height:     35px;
`

export default Header

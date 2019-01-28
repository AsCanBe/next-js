import Link from 'next/link'
import styled from 'styled-components'

const handleMenu = (e) => {
  e.preventDefault();
  document.querySelector('.menu').classList.toggle('active');
  document.querySelector('.hamburger').classList.toggle('active');
}

const Header = () => (
  <header>
    <NavBar className="container">
      <CompanyLogo src="/static/sunflower.png" />
      <MenuWrapper onClick={handleMenu}>
        Menu
        <Hamburger className="hamburger">
          <div />
          <div />
          <div />
        </Hamburger>
        <Menu className="menu">
          <Link href="/">
            <a className="container">Home</a>
          </Link>
          <Link href="/contact">
            <a className="container">Get in Touch</a>
          </Link>
          <PhoneContactWrapper href="tel:07508401223">
            <PhoneIcon src="/static/telephone.png" />07508 401223
          </PhoneContactWrapper>
        </Menu>
      </MenuWrapper>
    </NavBar>
  </header>
)

const NavBar = styled.nav`
  box-shadow:           0 .5rem 1rem rgba(0,0,0,.05);
  padding:              1rem 2rem;
  display:              flex;
  justify-content:      space-between;
  position:             fixed;
  height:               67px;
  z-index:              10;
  position:             relative;
  a {
    text-decoration:    none;
  }
`

const MenuWrapper = styled.div`
  color:        #3D348B;
  font-weight:  700;
  display:      flex;
  align-items:  center;
`

const Hamburger = styled.div`
  display:              inline-block;
  position:             relative;
  height:               30px;
  width:                33px;
  margin-left:          .5rem;
  border:               solid 2px #3D348B;
  border-radius:        .4rem;
  z-index:              100;
  div {
    height:             2px;
    width:              1.2rem;
    background-color:   #3D348B;
    position:           absolute;
    left:               .3rem;
    transition:         .9s;
    :nth-child(1) {
      top:              7px;
    }
    :nth-child(2) {
      top:              12px;
    }
    :nth-child(3) {
      bottom:           7px;
    }
  }
  &.active {
    div {
      :nth-child(1) {
        transform:          rotate(45deg);
        top:                12px
      }
      :nth-child(2) {
        background-color:   transparent;
      }
      :nth-child(3) {
        transform:          rotate(-45deg);
        bottom:             12px;
      }
    }
  }
`

const Menu = styled.div`
  position:             absolute;
  width:                100%;
  left:                 100%;
  transition:           .9s ease-out;
  background-color:     rgba(255,255,255,.9);
  top:                  0;
  height:               100vh;
  display:              flex;
  flex-direction:       column;
  align-items:          center;
  justify-content:      center;
  &.active {
    left:               0;
  }
  a {
    color:              #3D348B;
    margin-bottom:      2rem;
    border:             solid 2px #3D348B;
    border-radius:      1rem;
  }
`

const CompanyLogo = styled.img`
  max-width:  60px;
  height:     35px;
`

const PhoneContactWrapper = styled.a`
  display:      flex;
  align-items:  center;
`

const PhoneIcon = styled.img`
  width:          25px;
  height:         25px;
  margin-right:   .5rem;
`

export default Header

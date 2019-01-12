import Link from 'next/link'
import styled from 'styled-components'

const NavBar = styled.nav`
  box-shadow:           0 .5rem 1rem rgba(0,0,0,.05);
  padding:              1rem 2rem;
  display:              flex;
  justify-content:      space-between;
  background-color:     #fff;
  position:             fixed;
  width:                100%;
  a {
    text-decoration:    none;
    color:              #3D348B;
    font-weight:        700;
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
  height:               1.9rem;
  width:                2.1rem;
  margin-left:          .5rem;
  border:               solid 2px #3D348B;
  border-radius:        .4rem;
  z-index:              10;
  div {
    height:             2px;
    width:              1.2rem;
    background-color:   #3D348B;
    position:           absolute;
    left:               .3rem;
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
    color:              #fff;
    background-image:   linear-gradient(to right, #b149ff, #b462fb);
    margin-bottom:      2rem;
    padding:            1rem 2rem;
    border-radius:      1rem;
  }
`

const handleMenu = (e) => {
  e.preventDefault();
  document.querySelector('.menu').classList.toggle('active');
}

const Header = () => (
  <NavBar>
    LOGO
    <MenuWrapper
      onClick={handleMenu}
    >
      Menu
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      <Menu className="menu">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </Menu>
    </MenuWrapper>
  </NavBar>
)

export default Header

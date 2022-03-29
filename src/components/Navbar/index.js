import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './navbarelements';

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
    if(window.scrollY >= 80){
      setScrollNav(true);
    }else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/">
                Gweenwood UwU
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">
                      About
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="history">
                      History
                    </NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar
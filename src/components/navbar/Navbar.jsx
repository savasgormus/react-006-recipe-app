
import React, { useState } from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'
// import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <Nav>

      <Logo to="/home">
        <i>{"<Clarusway>"}</i>
        <span> Recipe</span>
      </Logo>

      <Hamburger onClick={()=>setIsOpen(!isOpen)}>
        <span/>
        <span/>
        <span/>
        {/* <GiHamburgerMenu/> */}
      </Hamburger>

      <Menu menubar={isOpen}>
        <MenuLink to="/about" onClick={()=>setIsOpen(!isOpen)}>About</MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink to="/" onClick={()=>setIsOpen(!isOpen)}>Logout</MenuLink>
      </Menu>


    </Nav>
  )
}

export default Navbar
import React, {useState} from 'react'
import { IconContext } from 'react-icons';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    Hamburger,
    NavMenu,
    NavItem,
    NavLinks
    } from './Navbar.elements';


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon />
                    Ucre8
                </NavLogo>
                <Hamburger onClick={handleClick} >
                    { click ? <FaTimes /> : <FaBars/>}
                </Hamburger>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to="/">
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/services">
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/products">
                            Products
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    )
}

export default Navbar

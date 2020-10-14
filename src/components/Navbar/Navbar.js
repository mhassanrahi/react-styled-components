import React, {useState, useEffect} from 'react'
import { IconContext } from 'react-icons';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    Hamburger,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
    } from './Navbar.elements';
import {Button} from '../../globalStyles';


const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click)
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

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
                        
                    <NavItemBtn>
                        {
                            button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>
                                        Sign Up
                                    </Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <Button primary fontBig>
                                        Sign Up
                                    </Button>
                                </NavBtnLink>
                            )
                        }

                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    )
}

export default Navbar

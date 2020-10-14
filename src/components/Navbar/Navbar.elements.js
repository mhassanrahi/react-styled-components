import styled from 'styled-components'
import {Container} from '../../globalStyles';

import {FaReact} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: #0066cc;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    font-size: 1.2rem;
    color: #fff;
    top: 0;
    z-index: 100;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px


    ${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const NavIcon = styled(FaReact)`
    margin-right: 0.5rem;
`;

export const Hamburger = styled.div `
    display: none;


    @media screen and (max-width:960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
    text-align: center;

    @media screen and (max-width:960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0: '-100%')};
        opacity: 1;
        treansion: all 0.5s ease;
        background: #4C93DB
    }
`;

export const NavItem = styled.li `
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #db944c;
    }

    @media screen and (max-width:960px) {
        width: 100%;

        &:hover{
            border:none;
        }
    }
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width:960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        &:hover {
            color: #DB944C;
            transition: all 0.3s ease
        }

    }
`;
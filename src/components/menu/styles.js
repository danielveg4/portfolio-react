import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
    text-decoration: none;
    display: flex; 
    justify-content: flex-end; 
`;

const StyledUl = styled.ul`
    font-weight: bold;
    align-items: center;
    display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')}; 
    justify-content: right;
    gap: 2rem;
    font-weight: normal;
    margin: 0rem;
    background-color: transparent;
    height: 50px;
    top: 1rem;
    @media (max-width: 600px) {
        margin: 0rem;
        background-color: ${({ showMenu }) => (showMenu ? 'rgba(128, 128, 128, 0.9)' : 'transparent')}; 
        position: fixed;
        left: 0rem;
        top: 0;
        width: 100%;
        height: ${({ showMenu }) => (showMenu ? '100%' : '0px')};
        transition: height 0.3s ease-in-out;
        flex-direction: column;
        align-items: start;
        padding-top: 5rem;
    }
`;

const StyledLi = styled.li`
    display: inline;
    font-size: 1.1rem;
    line-height: 1rem;
    padding: 0;
    margin-top: 2rem;
    font-weight: 500;
    @media (max-width: 600px) {
        font-size: 1.1rem;
    }
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: var(--principal);
    transition: filter 0.3s;
    padding: 0.5rem 1rem;
    @media (max-width: 600px) {
        padding: 0.5rem;
        width: 200px;
    }
    
    &:hover {
        cursor: pointer;
        filter: drop-shadow(0 0 15px #2c2830) hue-rotate(320deg);
    }

    &.active {
        border: 1.5px solid #2c2830;
    }
`;

const StyledHamburger = styled.img`
    display: none;
    @media (max-width: 600px) {
        display: block;
        width: 30px;
        height: 30px;
        position: absolute;
        top: 2.8rem;
        right: 3.5rem;
        z-index: 20;
    }
`;


export { StyledNav, StyledUl, StyledLi, StyledNavLink, StyledHamburger };
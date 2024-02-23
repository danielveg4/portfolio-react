import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
    text-decoration: none;
`;

const StyledUl = styled.ul`
    font-weight: bold;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: right;
    gap: 2rem;
    font-weight: normal;
    margin: 0rem;
    background-color: transparent;
    height: 50px;
    top: 1rem;
`;

const StyledLi = styled.li`
    display: inline;
    font-size: 1.1rem;
    line-height: 1rem;
    padding: 0;
    margin-top: 2rem;
    font-weight: 500;

`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: var(--principal);
    transition: filter 0.3s;
    padding: 0.5rem 1rem; 
    
    &:hover {
        cursor: pointer;
        filter: drop-shadow(0 0 15px #2c2830) hue-rotate(320deg);
    }

    &.active {
        border: 1.5px solid #2c2830;
    }
`;


export { StyledNav, StyledUl, StyledLi, StyledNavLink };
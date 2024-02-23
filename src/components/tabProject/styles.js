import styled from "styled-components";

export const StyledTabContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
`;

export const StyledNavLink = styled.div`
    color: var(--principal);
    transition: filter 0.3s;
    padding: 0.5rem 1rem; 
    text-decoration: none;
    font-size: 1.1rem;
    line-height: 1rem;
    font-weight: 500;
    
    &:hover {
        cursor: pointer;
        filter: drop-shadow(0 0 15px #2c2830) hue-rotate(320deg);
    }

    &.active {
        border: 1.5px solid #2c2830;
    }
`;
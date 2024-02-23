import styled from 'styled-components';

const StyledHeaderName = styled.div`
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 300;
    padding-top: 0.5rem;
    padding-left: 1rem;
    color: var(--principal);
`;

const StyledHeaderLogo = styled.div`
    cursor: pointer;
    font-weight: 900;
    font-size: 2rem;
    color: var(--principal);
`;

const StyledHeaderInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 2rem 3rem;
    position: fixed;
    width: calc(100% - 8rem);
    top: 0;
    z-index: 100;
    color: #dddddd;
    background-image: transparent;
    background-size: 400%;
    background-color: transparent;
`;

export { StyledHeaderName, StyledHeaderLogo, StyledHeaderInfo, StyledHeader };
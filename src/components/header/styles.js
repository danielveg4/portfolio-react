import styled from 'styled-components';

const StyledHeaderName = styled.div`
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 300;
    padding-top: 0.5rem;
    padding-left: 1rem;
    color: var(--principal);
    @media (max-width: 600px) {
        display: none;
    }
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
    @media (max-width: 600px) {
        padding: 0rem;
        margin-left: 1.5rem;
        padding-top: 1rem;
        gap: 0rem;
    }
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
    max-width: 1440px;
    @media (max-width: 600px) {
        padding: 1.5rem 0.8rem;
        background: #dddddd;
        background-image: var(--gradient);
        background-size: 400%;
        animation: fondo-anim 20s infinite alternate;
        background-color: #dddddd;
        width: 100%;
    }
    @media (max-width: 450px) {
        padding: 0rem 0rem;
        background: #dddddd;
        background-image: var(--gradient);
        background-size: 400%;
        animation: fondo-anim 20s infinite alternate;
        background-color: #dddddd;
        width: 100%;
        padding: 0;
        padding-top: 1.5rem;
        padding-bottom: 2rem;

    }
`;

export { StyledHeaderName, StyledHeaderLogo, StyledHeaderInfo, StyledHeader };
import styled from 'styled-components';

export const StyledContainer = styled.div`
    border: 1.5px solid #2c2830;
	margin: 2rem;
	margin-top: 9rem;
    padding: 10rem;
    padding-top: 7rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
        padding: 1rem;
        padding-top: 5rem;
        margin: 1rem;
        margin-top: 9rem;
    }
`;

export const StyledImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
`;

export const StyledImgVertical = styled.img`
    width: 358px;
    height: 164px;
    position: relative;
    top: -215px;
    left: 380px;
    z-index: 1;
    opacity: 0.9;
    transition: transform 0.3s, opacity 0.3s; 
	&:hover {
        transform: scale(1.20);
        opacity: 1;
    }
    @media (max-width: 600px) {
        display: none;
    }
`;

export const StyledImgVertical2 = styled.img`
    width: 358px;
    height: 164px;
    position: relative;
    top: -380px;
    left: -40px;
    z-index: 1;
    opacity: 0.9;
    transition: transform 0.3s, opacity 0.3s; 
	&:hover {
        transform: scale(1.20);
        opacity: 1;
    }
    @media (max-width: 600px) {
        display: none;
    }    
`;

export const StyledImgHorizontal = styled.img`
    width: 156px;
    height: 276px;
    position: relative;
    top: -200px;
    left: -250px;
    z-index: 1;
    opacity: 0.9;
    transition: transform 0.3s, opacity 0.3s; 
	&:hover {
        transform: scale(1.20);
        opacity: 1;
    }
    @media (max-width: 600px) {
        position: relative;
        margin: auto;
        top: -25px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
    }
    
`;

export const StyledImgPrincipal = styled.img`
    width: 690px;
    height: 297px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.9;
    transition: transform 0.3s, opacity 0.3s; 
	&:hover {
        transform: scale(1.20);
        opacity: 1;
    }
    @media (max-width: 600px) {
        display: none;
    }
`;

export const StyledTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    text-align: left;
    width: 250px;
    margin-right: -6rem;
    margin-left: 3rem;
    @media (max-width: 600px) {
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        margin-top: -3rem;
        text-align: center;
    }
`;

export const StyledProjectContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-left: 11rem;
    margin-bottom: 12rem;
    @media (max-width: 600px) {
        flex-direction: column;
        margin-left: 0;
        margin-bottom: 5rem;
    }
`;



export const StyledTextTitle = styled.h3`
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--secundary);
    margin-bottom: 1rem;
    &:hover {
        filter: drop-shadow(0 0 15px #2c2830) hue-rotate(320deg);
    }
`;

export const StyledTextLink = styled.a`
    font-size: 1.3rem;
    text-decoration: underline;
    font-weight: 500;
    color: var(--secundary);
    margin-bottom: 1rem;
    &:hover {
        cursor: pointer;
        filter: drop-shadow(0 0 15px #2c2830) hue-rotate(320deg);
    }
    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;
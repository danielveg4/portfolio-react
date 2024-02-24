import styled from 'styled-components';

export const StyledContainer = styled.div`
    border: 1.5px solid #2c2830;
	margin: 2rem;
	margin-top: 9rem;
	padding: 2rem;
    padding: 10rem;
    padding-top: 15rem;
    display: flex;
    flex-direction: row;
    gap: 14rem;
    justify-content: center;
    padding-bottom: 10.5rem;
    @media (max-width: 600px) {
        padding: 1rem;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 3rem;
        margin: 1rem;
        margin-top: 9rem;
    }
`;

export const StyledTitle = styled.h2`
    color: var(--principal);
    text-align: left;
    font-size: 3rem;
    font-weight: 900;
    @media (max-width: 600px) {
        font-size: 2.5rem;
        text-align: center;
    }
`;

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 310px;
    @media (max-width: 600px) {
        align-items: center;
        justify-content: center;
        justify-items: center;
    }
`;

export const StyledSubTitle = styled.h3`
    color: var(--principal);
    font-size: 1.8rem;
    margin-top: -2rem;
    @media (max-width: 600px) {
        font-size: 1.5rem;
        text-align: center;
    }
`;

export const StyledText = styled.p`
    color: var(--principal);
    font-size: 1.1rem;
    @media (max-width: 600px) {
        font-size: 1rem;
        line-height: 1.2rem;
        text-align: center;
        width: 250px;
    }
`;

export const StyledSkills = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 3.4rem;
    width: 310px;
    @media (max-width: 600px) {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        margin-bottom: 3rem;
    }
`;

export const StyledSkillsLenguages = styled.div`
    display: grid;
    grid-template-columns: 1fr; 
    gap: 1rem;
`;

export const StyledSkillRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 600px) {
        max-width: 240px;
        justify-content: space-between;
        gap: 5rem;
    }
`;

export const StyledSkillLeng = styled.p`
    color: var(--principal);
    font-weight: bold;
    font-size: 1.1rem;
`;

export const StyledTitleBotton = styled.h2`
    color: var(--principal);
    text-align: right;
    font-size: 3rem;
    font-weight: 900;
    margin-top: 5.5rem;
    @media (max-width: 600px) {
        text-align: center;
        margin-top: -2rem;
        font-size: 2.5rem;
    }
`;


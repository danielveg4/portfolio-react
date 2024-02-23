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
    height: 37vh;
    gap: 14rem;
    justify-content: center;
`;

export const StyledTitle = styled.h2`
    color: var(--principal);
    text-align: left;
    font-size: 3rem;
    font-weight: 900;
`;

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 310px;
`;

export const StyledSubTitle = styled.h3`
    color: var(--principal);
    font-size: 1.8rem;
    margin-top: -2rem;
`;

export const StyledText = styled.p`
    color: var(--principal);
    padding-bottom: 5rem;
`;

export const StyledSkills = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 3.4rem;
    width: 310px;
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
    margin-top: 3.5rem;
`;


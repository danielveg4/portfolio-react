import styled from 'styled-components';

export const StyledContainer = styled.div`
	border: 1.5px solid #2c2830;
	margin: 2rem;
	margin-top: 9rem;
	display: flex;
	flex-direction: column;
	height: 69vh;
`;

export const StyledTitle = styled.h2`
	color: var(--principal);
	margin-top: 7rem;
	font-size: 3.5rem;
	text-decoration: none;
	font-weight: 800;
	display: flex;
	justify-content: center;
`;

export const StyledInfo = styled.div`
	display: flex;
	flex-direction: row;
    padding: 10rem;
	padding-top: 5rem;
	padding-bottom: 5rem;
    justify-content: center;
    gap: 15rem;
`;

export const StyledSocialMedia = styled.a`
	font-weight: 500;
	text-decoration: underline;
	color: var(--principal);
	font-size: 1.8rem;
    &:hover {
        cursor: pointer;
        filter: drop-shadow(0 0 15px #2c2830) hue-rotate(320deg);
    }
`;

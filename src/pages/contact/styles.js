import styled from 'styled-components';

export const StyledContainer = styled.div`
	border: 1.5px solid #2c2830;
	margin: 2rem;
	margin-top: 9rem;
	display: flex;
	flex-direction: column;
	padding-bottom: 8.2rem;
	@media (max-width: 600px) {
        margin: 1rem;
		margin-top: 9rem;
    }
`;

export const StyledTitle = styled.h2`
	color: var(--principal);
	margin-top: 7rem;
	font-size: 3.5rem;
	text-decoration: none;
	font-weight: 800;
	display: flex;
	justify-content: center;
	@media (max-width: 600px) {
        font-size: 2.5rem;
    }
`;

export const StyledInfo = styled.div`
	display: flex;
	flex-direction: row;
    padding: 10rem;
	padding-top: 5rem;
	padding-bottom: 5rem;
    justify-content: center;
    gap: 15rem;
	@media (max-width: 600px) {
        flex-direction: column;
		padding: 0rem;
		align-items: center;
		gap: 3rem;
		margin-top: 2rem;
		margin-bottom: 2rem;
    }
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
	@media (max-width: 600px) {
        font-size: 1.3rem;
    }
`;

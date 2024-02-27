import styled from 'styled-components';

const StyledMainContainer = styled.div`
	border: 1.5px solid #2c2830;
	margin: 2rem;
	margin-top: 1rem;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	color: #2c2830;
	margin-top: 9rem;
    align-content: center;
	@media (max-width: 600px) {
        padding: 0rem;
		margin: 1rem;
		margin-top: 9rem;
    }
`;

const StyledTitleMain = styled.h2`
	margin-top: 8rem;
	font-weight: 900;
	font-size: 3rem;
	@media (max-width: 600px) {
        font-size: 2rem;
		margin-top: 4rem;
    }
`;

const StyledSubtitleMain = styled.h3`
	border-top: 1px solid #2c2830;
	font-weight: 700;
	font-size: 2rem;
	margin-top: -1.5rem;
	margin-bottom: 0;
	padding-top: 0.5rem;
	padding-left: 1rem;
	padding-right: 1rem;
	@media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

const StyledSubcontainerMain = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 4rem;
	gap: 14rem;
	margin-bottom: 9.9rem;
	@media (max-width: 600px) {
		flex-direction: column;
		gap: 3rem;
		align-items: center;
		margin-bottom: 4rem;
    }
`;

const StyledTextMain = styled.div`
	border: 1.5px solid #2c2830;
	padding: 2rem;
	margin-bottom: 1rem;
	font-size: 1.1rem;
	width: 330px;
	overflow: hidden;
	transition: transform 0.3s;
	object-fit: cover;
	&:hover {
        transform: scale(1.03);
    }
	@media (max-width: 600px) {
		padding: 1rem;
		width: 240px;
        font-size: 1rem;
        line-height: 1.2rem;
    }
`;

const StyledIMgContainerMain = styled.div`
	border: 1.5px solid #2c2830;
	width: 320px;
	height: 320px;
	border-radius: 50%;
	background-size: cover;
	background-position: center;
	overflow: hidden;
    transition: transform 0.3s;
    object-fit: cover; 
	&:hover {
        transform: scale(1.03);
    }
	@media (max-width: 600px) {
		width: 240px;
		height: 240px;
    }
`;

const StyledImgMain = styled.img`
	width: 320px;
	height: 320px;
	filter: drop-shadow(0 0 8px #2c2830) grayscale(90%);
	overflow: hidden;
    transition: transform 0.4s;
    object-fit: cover; 
	&:hover {
        filter: drop-shadow(0 0 10px #2c2830) grayscale(30%);
    }
	@media (max-width: 600px) {
		width: 240px;
		height: 240px;
    }
`;

export {
	StyledMainContainer,
	StyledTitleMain,
	StyledSubtitleMain,
	StyledSubcontainerMain,
	StyledTextMain,
	StyledIMgContainerMain, StyledImgMain
};

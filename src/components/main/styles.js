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

`;

const StyledTitleMain = styled.h2`
	margin-top: 8rem;
	font-weight: 900;
	font-size: 3rem;
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
`;

const StyledSubcontainerMain = styled.div`
	display: flex;
	flex-direction: row;
	gap: 5rem;
	margin-top: 4rem;
	gap: 14rem;
	margin-bottom: 10rem;
`;

const StyledTextMain = styled.div`
	border: 1.5px solid #2c2830;
	padding: 2rem;
	font-size: 1.1rem;
	width: 310px;
	overflow: hidden;
	transition: transform 0.3s;
	object-fit: cover;
`;

const StyledIMgContainerMain = styled.div`
	border: 1.5px solid #2c2830;
	width: 310px;
	height: 310px;
	border-radius: 50%;
	background-size: cover;
	background-position: center;
	overflow: hidden;
	transition: transform 0.3s;
	object-fit: cover;
`;

const StyledImgMain = styled.img`
	width: 310px;
	height: 310px;
`;

export {
	StyledMainContainer,
	StyledTitleMain,
	StyledSubtitleMain,
	StyledSubcontainerMain,
	StyledTextMain,
	StyledIMgContainerMain, StyledImgMain
};

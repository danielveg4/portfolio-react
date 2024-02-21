import {
	StyledMainContainer,
	StyledTitleMain,
	StyledSubtitleMain,
	StyledSubcontainerMain,
	StyledTextMain,
	StyledIMgContainerMain,
	StyledImgMain
} from './styles';

const Main = () => {
	return (
		<StyledMainContainer>
			<StyledTitleMain>hi, I am daniel</StyledTitleMain>
			<StyledSubtitleMain>web developer</StyledSubtitleMain>
			<StyledSubcontainerMain>
				<StyledTextMain>
					Web developer proficient in CSS, Javascript and PHP, and frameworks
					such as React, Node and Laravel. I am a multidisciplinary person, with
					holistic vision, skilled in turning project requirements into
					responsive, dynamic websites. I like to work in a team and I have
					worked for NGOs and private companies. This has given me a great
					ability to understand all parts of a business.
				</StyledTextMain>
				<StyledIMgContainerMain>
					<StyledImgMain src='public\assets\images\portraitpf2.png' />
				</StyledIMgContainerMain>
			</StyledSubcontainerMain>
		</StyledMainContainer>
	);
};

export default Main;

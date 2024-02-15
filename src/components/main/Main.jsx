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
					I help designers, small agencies and businesses bring their ideas to
					life. Powered by HTML, CSS and Javascript, along with skills in
					additional SCSS, GIT, PHP, and Laravel, I turn your requirements into
					responsive and fresh websites - on time and on budget.
				</StyledTextMain>
				<StyledIMgContainerMain>
					<StyledImgMain src='public\assets\images\portraitpf2.png' />
				</StyledIMgContainerMain>
			</StyledSubcontainerMain>
		</StyledMainContainer>
	);
};

export default Main;

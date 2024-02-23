import { aboutUser } from '../../constants/mainInfo';
import {
	StyledContainer,
	StyledTitle,
	StyledInfo,
	StyledSubTitle,
	StyledText,
	StyledSkills,
	StyledSkillsLenguages,
	StyledSkillLeng,
	StyledSkillRow,
	StyledTitleBotton
} from './styles';

const About = () => {
	return (
		<StyledContainer>
			<StyledInfo>
				<StyledTitle>{aboutUser.title}</StyledTitle>
				<StyledSubTitle>{aboutUser.subtitle}</StyledSubTitle>
				<StyledText>{aboutUser.text}</StyledText>
			</StyledInfo>
			<StyledSkills>
				<StyledSkillsLenguages>
					<StyledSkillRow>
						<StyledSkillLeng>CSS</StyledSkillLeng>
						<StyledSkillLeng>JAVASCRIPT</StyledSkillLeng>
					</StyledSkillRow>
					<StyledSkillRow>
						<StyledSkillLeng>REACT</StyledSkillLeng>
						<StyledSkillLeng>NODE</StyledSkillLeng>
					</StyledSkillRow>
					<StyledSkillRow>
						<StyledSkillLeng>PHP</StyledSkillLeng>
						<StyledSkillLeng>LARAVEL</StyledSkillLeng>
					</StyledSkillRow>
				</StyledSkillsLenguages>
				<StyledTitleBotton>skills</StyledTitleBotton>
			</StyledSkills>
		</StyledContainer>
	);
};

export default About;

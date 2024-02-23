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
				<StyledTitle>daniel vega</StyledTitle>
				<StyledSubTitle>web developer</StyledSubTitle>
				<StyledText>
					born in Santander, Im a passionate web developer based in Madrid. With
					knowledge and expertise in web development, I specialize in creating
					creative and functional digital solutions. Using a wide range of
					technologies and programming languages such as CSS, JavaScript and
					PHP, using React, Node or Laravel, I build dynamic and scalable
					websites.
				</StyledText>
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

import { contactUser } from '../../constants/mainInfo';
import {
	StyledContainer,
	StyledInfo,
	StyledTitle,
	StyledSocialMedia
} from './styles';

const Contact = () => {
	return (
		<StyledContainer>
			<StyledTitle>{contactUser.title}</StyledTitle>
			<StyledInfo>
				<StyledSocialMedia href={contactUser.git}>github</StyledSocialMedia>
				<StyledSocialMedia href={contactUser.linkedin}>
					linkdIn
				</StyledSocialMedia>
				<StyledSocialMedia href={contactUser.mail}>mail</StyledSocialMedia>
			</StyledInfo>
		</StyledContainer>
	);
};

export default Contact;

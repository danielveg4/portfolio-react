import { user } from '../../constants/mainInfo';
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
			<StyledTitleMain>{user.title}</StyledTitleMain>
			<StyledSubtitleMain>{user.subtitle}</StyledSubtitleMain>
			<StyledSubcontainerMain>
				<StyledTextMain>{user.text}</StyledTextMain>
				<StyledIMgContainerMain>
					<StyledImgMain src={user.img} />
				</StyledIMgContainerMain>
			</StyledSubcontainerMain>
		</StyledMainContainer>
	);
};

export default Main;

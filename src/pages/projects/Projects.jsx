import TabProject from '../../components/tabProject/TabProject';
import {
	StyledContainer,
	StyledImgPrincipal,
	StyledImgHorizontal,
	StyledImgVertical,
	StyledImgVertical2,
	StyledImgContainer,
	StyledTextContainer,
	StyledProjectContainer,
	StyledTextTitle,
	StyledTextLink
} from './styles';
import useProjectTabs from '../../constants/useProjectTabs';

const Projects = ({ projects }) => {
	const { projectTabs, activeProject } = useProjectTabs(projects);

	return (
		<StyledContainer>
			<TabProject tabs={projectTabs} />
			<StyledProjectContainer>
				<StyledImgContainer>
					<StyledImgPrincipal
						src={activeProject.image}
						alt={activeProject.title}
					/>
					<StyledImgHorizontal
						src={activeProject.image2}
						alt={activeProject.title}
					/>
					<StyledImgVertical
						src={activeProject.image3}
						alt={activeProject.title}
					/>
					<StyledImgVertical2
						src={activeProject.image4}
						alt={activeProject.title}
					/>
				</StyledImgContainer>
				<StyledTextContainer>
					<StyledTextTitle>{activeProject.title}</StyledTextTitle>
					<StyledTextLink href={activeProject.live}>Live here</StyledTextLink>
					<StyledTextLink href={activeProject.code}>Code here</StyledTextLink>
				</StyledTextContainer>
			</StyledProjectContainer>
		</StyledContainer>
	);
};

export default Projects;

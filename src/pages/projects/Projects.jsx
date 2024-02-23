import TabProject from '../../components/tabProject/TabProject';
import {
	StyledContainer,
	StyledImgPrincipal,
	StyledImgSecondary,
	StyledImgContainer
} from './styles';
import useProjectTabs from '../../constants/useProjectTabs';

const Projects = ({ projects }) => {
	const { projectTabs, activeProject } = useProjectTabs(projects);

	return (
		<StyledContainer>
			<TabProject tabs={projectTabs} />
			<StyledImgContainer>
				<StyledImgPrincipal
					src={activeProject.image}
					alt={activeProject.title}
				/>
				<StyledImgSecondary
					src={activeProject.image2}
					alt={activeProject.title}
				/>
				<StyledImgSecondary
					src={activeProject.image3}
					alt={activeProject.title}
				/>
				<StyledImgSecondary
					src={activeProject.image4}
					alt={activeProject.title}
				/>
				<h1>{activeProject.title}</h1>
				<p>{activeProject.live}</p>
				<p>{activeProject.code}</p>
			</StyledImgContainer>
		</StyledContainer>
	);
};

export default Projects;

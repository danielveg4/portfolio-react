import { StyledNavLink, StyledTabContainer } from './styles';

const TabProject = ({ tabs }) => {
	return (
		<StyledTabContainer>
			{tabs.map((tab, index) => (
				<StyledNavLink
					key={index}
					onClick={tab.onClick}
					className={tab.active ? 'active' : ''}
				>
					{tab.title}
				</StyledNavLink>
			))}
		</StyledTabContainer>
	);
};

export default TabProject;

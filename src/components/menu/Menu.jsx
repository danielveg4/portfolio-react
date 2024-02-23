import { StyledNav, StyledUl, StyledLi, StyledNavLink } from './styles';

const Menu = () => {
	return (
		<StyledNav>
			<StyledUl>
				<StyledLi>
					<StyledNavLink to='/'>Home</StyledNavLink>
				</StyledLi>
				<StyledLi>
					<StyledNavLink to='/projects'>Projects</StyledNavLink>
				</StyledLi>
				<StyledLi>
					<StyledNavLink to='/about'>About</StyledNavLink>
				</StyledLi>
				<StyledLi>
					<StyledNavLink to='/contact'>Contact</StyledNavLink>
				</StyledLi>
			</StyledUl>
		</StyledNav>
	);
};

export default Menu;

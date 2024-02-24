import { useMenu } from '../../constants/useMenu';
import {
	StyledNav,
	StyledUl,
	StyledLi,
	StyledNavLink,
	StyledHamburger
} from './styles';

const Menu = () => {
	const { showMenu, isMobile, menuIcon, toggleMenu } = useMenu();

	return (
		<StyledNav>
			{isMobile && (
				<StyledHamburger
					src={`assets/images/${menuIcon}`}
					alt='menu'
					onClick={toggleMenu}
					showMenu={showMenu}
				/>
			)}
			<StyledUl showMenu={!isMobile || showMenu}>
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

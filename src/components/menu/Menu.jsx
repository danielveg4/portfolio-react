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

	const handleLinkClick = () => {
		if (isMobile) {
			toggleMenu();
		}
	};

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
					<StyledNavLink to='/' onClick={handleLinkClick}>
						Home
					</StyledNavLink>
				</StyledLi>
				<StyledLi>
					<StyledNavLink to='/projects' onClick={handleLinkClick}>
						Projects
					</StyledNavLink>
				</StyledLi>
				<StyledLi>
					<StyledNavLink to='/about' onClick={handleLinkClick}>
						About
					</StyledNavLink>
				</StyledLi>
				<StyledLi>
					<StyledNavLink to='/contact' onClick={handleLinkClick}>
						Contact
					</StyledNavLink>
				</StyledLi>
			</StyledUl>
		</StyledNav>
	);
};

export default Menu;

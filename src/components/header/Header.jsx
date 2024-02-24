import { NavLink } from 'react-router-dom';
import Menu from '../menu/Menu';
import {
	StyledHeader,
	StyledHeaderInfo,
	StyledHeaderLogo,
	StyledHeaderName
} from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledHeaderInfo>
				<NavLink to='/'>
					<StyledHeaderLogo>dv</StyledHeaderLogo>
				</NavLink>
				<StyledHeaderName>daniel vega</StyledHeaderName>
			</StyledHeaderInfo>
			<Menu />
		</StyledHeader>
	);
};

export default Header;

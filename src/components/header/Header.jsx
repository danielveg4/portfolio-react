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
				<StyledHeaderLogo>dv</StyledHeaderLogo>
				<StyledHeaderName>daniel vega</StyledHeaderName>
			</StyledHeaderInfo>
			<Menu />
		</StyledHeader>
	);
};

export default Header;

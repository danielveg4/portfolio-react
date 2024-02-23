import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import { Global } from './global';
import Router from './router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<>
				<Global />
				<Header />
				<Router />
			</>
		</BrowserRouter>
	);
};

export default App;

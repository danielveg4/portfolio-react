import Main from '../components/main/Main';
import { Routes, Route } from 'react-router-dom';
import Projects from '../pages/projects/Projects';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Main title='home' />} />
			<Route path='/projects' element={<Projects title='projects' />} />
			<Route path='/about' element={<About title='about' />} />
			<Route path='/contact' element={<Contact title='contact' />} />
		</Routes>
	);
};

export default Router;

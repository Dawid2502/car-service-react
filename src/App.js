import './App.css';
import MainComponent from './components/MainComponent/MainComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OffersComponent from './components/OffersComponent/OffersComponent';
import Navbar from './components/Navbar/Navbar';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import Footer from './components/Footer/Footer';
import FAQ from './components/FAQ/Faq';

function App() {
	return (
		<div className='App'>
			<Router>
        <Navbar />
        <HeaderComponent />
				<Routes>
					<Route path='/' element={<MainComponent />} />
					<Route path="/service/:serviceId" element={<OffersComponent />} />
					<Route path='/faq' element={<FAQ/>}/>					
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;

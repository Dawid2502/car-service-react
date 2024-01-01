import './MainComponent.scss';
import '../OffersComponent/OffersComponent.scss'
import Services from '../ServicesComponent/Services';
import AboutCompany from '../AboutCompany/AboutCompany';
import Mechaniker from '../../images/mechaniker_draw_v2.png';
import Handshake from '../../images/handshake-651818_640v2.png';
import Tools from '../../images/tools-312334_640.png';
import ContactComponent from '../ContactComponent/ContactComponent';

export default function MainComponent() {

	return (
		<>
			<main>
				<AboutCompany />
				<div className='banner'>
					<div className='wrapper-banner'>
						<div className='item-banner'>
							<img src={Mechaniker} alt='Czarna grafika mechanika umieszczonego w kole zębatym'/>
							<p>Doświadczony zespół</p>
						</div>
						<div className='item-banner'>
							<img src={Handshake} alt='Grafika uścisk dłoni'/>
							<p>Setki zadowolonych klientów</p>
						</div>
						<div className='item-banner'>
							<img src={Tools} alt='Grafika skrzyżowane klucz i młotek'/>
							<p>Najlepszy sprzęt</p>
						</div>
					</div>
				</div>
				<Services />
				<ContactComponent />
			</main>
		</>
	);
}

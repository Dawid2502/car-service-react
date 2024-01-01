import React from 'react';
import { Link } from 'react-router-dom';
import carMechanicsImage from '../../images/tools-640.png';
import carElectronicsImage from '../../images/cpu-2488091_640.png';
import tireImage from '../../images/tire-1135376_640.png';
import computerImage from '../../images/isometric-4971968_640.png';
import climaImage from '../../images/air-conditioning.png';
import oilImage from '../../images/car-oil.png';
import './Services.scss';

export default function Services() {
	return (
		<div className='services' id='services'>
			<h2 className='section-title'>Usługi</h2>
			<div className='wrapper'>
				<div className='services-container'>
					<Link to={`/service/1`} className='sub-style'>
						<div className='service-box'>
							<img src={carMechanicsImage} alt='Grafika skrzyżowane klucz i młotek'/>
							<p className='service-title'>Mechanika samochodowa</p>
						</div>
					</Link>
					<Link to={`/service/2`} className='sub-style'>
						<div className='service-box'>
							<img src={carElectronicsImage} alt='Grafika mikrokontrolera'/>
							<p className='service-title'>Elektronika</p>
						</div>
					</Link>
					<Link to={`/service/3`} className='sub-style'>
						<div className='service-box'>
							<img src={tireImage} alt='Grafika koła samochodowego'/>
							<p className='service-title'>Wulkanizacja</p>
						</div>
					</Link>
					<Link to={`/service/4`} className='sub-style'>
						<div className='service-box'>
							<img src={computerImage} alt='Grafika komputer'/>
							<p className='service-title'>Diagnostyka komputerowa</p>
						</div>
					</Link>
					<Link to={`/service/5`} className='sub-style'>
						<div className='service-box'>
							<img src={climaImage} alt='Grafika termometru i płatka śniegu'/>
							<p className='service-title'>Serwis klimatyzacji</p>
						</div>
					</Link>
					<Link to={`/service/6`} className='sub-style'>
						<div className='service-box'>
							<img src={oilImage} alt='Grafika butelka oleju'/>
							<p className='service-title'>Wymiana oleju</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

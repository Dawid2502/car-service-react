import { useParams } from 'react-router-dom';
import './OffersComponent.scss';
import servicesData from '../OffersComponent/ServicesData';

export default function OffersComponent() {
	const { serviceId } = useParams();
	const service = servicesData[serviceId - 1];

	if (!service) {
		return <div>Nie znaleziono usługi</div>;
	}

	return (
		<div className='offers-section'>
			<h2 className='offers-title'>{service.title}</h2>
			<div className='offers-container'>
				<img src={service.imagePath} alt={service.altText} />
				<p>{service.description}</p>
			</div>
		</div>
	);
}

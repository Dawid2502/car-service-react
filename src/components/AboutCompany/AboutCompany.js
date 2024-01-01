import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSquareFacebook,
	faLinkedin,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import AboutCompanyImage from '../../images/jakob-rosen-Td2g36uchUw-unsplash.jpg';
import './AboutCompany.scss';

export default function AboutCompany() {
	return (
		<div className='about-company' id='aboutus'>
			<h2 className='section-title'>O firmie</h2>
			<div className='wrapper'>
				<div className='container'>
					<img src={AboutCompanyImage} alt='Biały sportowy samochód w warsztacie'/>
					<div className='text-container'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
							ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
							eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
							est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
							velit, sed quia non numquam eius modi tempora incidunt ut labore
							et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
							veniam, quis nostrum exercitationem ullam corporis suscipit
							laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
							vel eum iure reprehenderit qui in ea voluptate velit esse quam
							nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
							voluptas nulla pariatur?
						</p>
						<div className='social-media'>
							<a className='icon-media' href='#'>
								<FontAwesomeIcon
									// className='icon-media'
									icon={faSquareFacebook}
								/>
							</a>
							<a className='icon-media' href='#'>
								<FontAwesomeIcon 
                                // className='icon-media' 
                                icon={faInstagram} />
							</a>
							<a className='icon-media' href='#'>
								<FontAwesomeIcon 
                                // className='icon-media' 
                                icon={faLinkedin} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

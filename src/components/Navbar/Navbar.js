import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faBars } from '@fortawesome/free-solid-svg-icons';
import servicesData from '../OffersComponent/ServicesData';
import './Navbar.scss';

export default function Navbar() {
	const [arrowClicked, setArrowClicked] = useState(false);
	const [arrowRotation, setArrowRotation] = useState(0);
	const [menuBarsClicked, setMenuBarsClicked] = useState(false);

	const burgerMenuClick = () => {
		setMenuBarsClicked(!menuBarsClicked);
	};

	const submenuClick = () => {
		setArrowClicked(!arrowClicked);
		setArrowRotation(arrowClicked ? 0 : 180);
	};

	const closeBurgerMenu = () => {
		setMenuBarsClicked(false);
	  };

	const scrollToSection = (sectionId) => {
		setMenuBarsClicked(!menuBarsClicked);
		const section = document.getElementById(sectionId);
		if (section) {
		  window.scrollTo({
			top: section.offsetTop,
			behavior: 'smooth',
		  });
		}
		console.log(window);
	  };

	return (
		<>
			<button className='burger-menu' onClick={burgerMenuClick}>
				<FontAwesomeIcon icon={faBars} className='menu-bars' />
			</button>
			<nav className={menuBarsClicked ? 'nav-active' : ''} >
				<div className='navbar-container'>
					<div className='name-site'>
						<p>ProMechanic</p>
					</div>
					<ul className='nav-items'>
						<Link to={`/`} className='sub-style' onClick={burgerMenuClick}>
							<li className='item'>Home</li>
						</Link>
						<Link to={'/'} className='sub-style' onClick={() => scrollToSection('aboutus')}>
							<li className='item'>O nas</li>
						</Link>
						<li className='item' onClick={submenuClick} >
							Usługi{' '}
							<FontAwesomeIcon
								icon={faArrowDown}
								className={`arrow ${arrowClicked ? 'arrow-rotate' : ''}`}
							/>
							<ul className={arrowClicked ? 'submenu active' : 'submenu'}>
								{servicesData.map((service, index) => (
									<li className='sub-item' key={index}>
										<Link
											to={`/service/${index + 1}`}
											className='sub-style'
											onClick={() => {
												submenuClick();
												closeBurgerMenu(); 
											  }}
										>
											{service.title}
										</Link>
									</li>
								))}
							</ul>
						</li>
						<Link to={'/'} className='sub-style' onClick={() => scrollToSection('contact')}>
							<li className='item'>Kontakt</li>
						</Link>
						<Link to={'/faq'} className='sub-style'>
							<li className='item'>FAQ</li>
						</Link>
					</ul>
				</div>
			</nav>
		</>
	);
}

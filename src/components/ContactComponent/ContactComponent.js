import './ContactComponent.scss';

export default function ContactComponent() {
	return (
		<div className='contact-section' id='contact'>
			<h2 className='section-title'>Kontakt</h2>
			<div className='wrapper'>
				<div className='contact-container'>
					<div className='address-box'>
						<p className='heading'>Adres</p>
						<p>ul. Gwiezdna 14</p>
						<p>00-000 Miasto</p>
						<p>
							tel:<span>322 433 544</span>
						</p>
						<p>
							email:<span>email@email.pl</span>
						</p>
						<p className='heading'>Godziny otwarcia</p>
						<p>
							pon - pt: <span>6 - 18</span>
						</p>
						<p>
							sob: <span>6 - 12</span>
						</p>
						<p>
							tel: <span>nieczynne</span>
						</p>
					</div>
					<form>
						<label>Imię i Nazwisko</label>
						<input type='text' name='name' placeholder='Imię i Nazwisko' />
						<label>Email</label>
						<input type='text' name='email' placeholder='Email' />
						<label>Wiadomość</label>
						<textarea placeholder='Wiadomość' />
						<button type='submit' className='msg-btn'>
							Wyślij
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Faq.scss';
import { useState } from 'react';

export default function FAQ() {
	const faqsData = [
		{
			question: 'Jak często wymieniać olej?',
			answer:
				'Tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibu ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.',
		},
		{
			question: 'Jakie opony wybrać?',
			answer:
				'Tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibu ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.',
		},
		{
			question: 'Czy przeprowadzacie pełną diagnostykę komputerową?',
			answer:
				'Tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibu ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.',
		},
		{
			question: 'Czy posiadacie samochody zastępcze?',
			answer:
				'Tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibu ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.',
		},
		{
			question: 'Jak dobrać olej do silnika?',
			answer:
				'Tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibu ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.',
		},
		{
			question: 'Jakie są objawy zepsutej klimatyzacji?',
			answer:
				'Tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibu ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.',
		},
		{
			question: 'Czy można u was kupić nowe opony?',
			answer:
				'Tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibu ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus.',
		},
	];

	const [showAnswers, setShowAnswers] = useState(
		Array(faqsData.length).fill(false)
	);

	const arrowClick = (index) => {
		const updatedShowAnswers = [...showAnswers];
		updatedShowAnswers[index] = !updatedShowAnswers[index];
		setShowAnswers(updatedShowAnswers);
	};

	return (
		<div className='faqs-container'>
			<h2 className='section-title'>FAQ</h2>
			<div className='wrapper'>
				{faqsData.map((faq, index) => (
					<div className='faqs-box' key={index}>
						<div className='question-box'>
							<p className='faq-question'>{faq.question} </p>
							<FontAwesomeIcon
								className='arrow-down'
								icon={faChevronDown}
								onClick={() => arrowClick(index)}
							/>
						</div>
						<p className={showAnswers[index] ? 'faq-answer' : 'faq-hide'}>
							{faq.answer}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

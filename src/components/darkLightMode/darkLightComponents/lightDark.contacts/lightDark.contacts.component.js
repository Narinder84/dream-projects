/** @format */

import React, { useState } from 'react';
import { send } from 'emailjs-com';

import contactDay from '../../../../img/undraw_contact_us_day.svg';
import contactNight from '../../../../img/undraw_contact_us_night.svg';

import './lightDark.contacts.styles.css';

const LightDarkConstactSection = (props) => {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		ismailsent: '',
	// 		toSend: {
	// 			name: '',
	// 			email: '',
	// 			subject: '',
	// 			message: '',
	// 		},
	// 	};
	// }

	const INITstate = {
		ismailsent: '',
		toSend: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
	};
	const [state, setState] = useState(INITstate);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		const newToSend = { ...state.toSend, [name]: value };
		setState({ ...state, toSend: newToSend });
	};
	const handleSubmit = async () => {
		const { name, email, subject, message } = state.toSend;

		// sendMail();
		if (name && email && subject && message) {
			return send(
				'service_g34bwmw',
				'template_i2iopti',
				state.toSend,

				'user_nOccccZao1z8VOViku901',
			)
				.then((response) => {
					// console.log('SUCCESS!', response.status, response.text);
					const values = { name: '', email: '', subject: '', message: '' };
					setState({ ...state, ismailsent: true, toSend: values });
				})
				.catch((err) => {
					// console.log('FAILED...', err);
					setState({ ...state, ismailsent: false });
				});
		}
		setState({ ...state, ismailsent: false });
	};

	const isLightMode = props.isLightMode;

	return (
		<section id='contact'>
			<h1>Contact</h1>
			<img
				src={isLightMode ? contactDay : contactNight}
				alt='Idea'
				id='image3'
			/>
			<div className='image-container' id='contact-form'>
				<div className='message-container'>
					{state.ismailsent === '' ? (
						<p id='hd'>Send Message</p>
					) : state.ismailsent === true ? (
						<p className='hd' id='success'>
							Message has been sent. Thanks for showing intrest.
						</p>
					) : state.ismailsent === false ? (
						<p className='hd' id='fault'>
							Somethig missing.
						</p>
					) : null}
				</div>
				<p className='form-p'>Name: </p>
				<input
					type='text'
					name='name'
					onChange={handleInputChange}
					value={state.toSend.name}
				/>
				<p className='form-p'>Email:</p>
				<input
					type='email'
					name='email'
					onChange={handleInputChange}
					value={state.toSend.email}
				/>
				<p className='form-p'>Subject:</p>
				<input
					type='text'
					name='subject'
					onChange={handleInputChange}
					value={state.toSend.subject}
				/>
				<p className='form-p'>Your Message:</p>

				<textarea
					id='w3review'
					name='message'
					value={state.toSend.message}
					rows='4'
					cols='50'
					onChange={handleInputChange}></textarea>
				<div className='send-container'>
					<button className='primary' id='send' onClick={handleSubmit}>
						Send
					</button>
				</div>
			</div>
		</section>
	);
};

export default React.memo(LightDarkConstactSection);

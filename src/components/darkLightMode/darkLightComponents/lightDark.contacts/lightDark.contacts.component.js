/** @format */

import React from 'react';
import { send } from 'emailjs-com';

import contactDay from '../../../../img/undraw_contact_us_day.svg';
import contactNight from '../../../../img/undraw_contact_us_night.svg';

import './lightDark.contacts.styles.css';

class LightDarkConstactSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ismailsent: '',
			toSend: {
				name: '',
				email: '',
				subject: '',
				message: '',
			},
		};
	}
	handleInputChange = (e) => {
		const { name, value } = e.target;
		const newToSend = { ...this.state.toSend, [name]: value };
		this.setState({ ...this.state, toSend: newToSend });
	};
	handleSubmit = async () => {
		const { name, email, subject, message } = this.state.toSend;
		console.log(this.state);
		// sendMail();
		if (name && email && subject && message) {
			return send(
				'service_g34bwmw',
				'template_i2iopti',
				this.state.toSend,

				'user_nOccccZao1z8VOViku901',
			)
				.then((response) => {
					// console.log('SUCCESS!', response.status, response.text);
					const values = { name: '', email: '', subject: '', message: '' };
					this.setState({ ...this.state, ismailsent: true, toSend: values });
				})
				.catch((err) => {
					// console.log('FAILED...', err);
					this.setState({ ismailsent: false });
				});
		}
		this.setState({ ismailsent: false });
	};
	render() {
		console.log(this.state.toSend);
		const {
			ismailsent,

			toSend,

			isLightMode,
		} = this.state;
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
						{ismailsent === '' ? (
							<p id='hd'>Send Message</p>
						) : ismailsent === true ? (
							<p className='hd' id='success'>
								Message has been sent. Thanks for showing intrest.
							</p>
						) : ismailsent === false ? (
							<p className='hd' id='fault'>
								Somethig missing.
							</p>
						) : null}
					</div>
					<p className='form-p'>Name: </p>
					<input
						type='text'
						name='name'
						onChange={this.handleInputChange}
						value={toSend.name}
					/>
					<p className='form-p'>Email:</p>
					<input
						type='email'
						name='email'
						onChange={this.handleInputChange}
						value={toSend.email}
					/>
					<p className='form-p'>Subject:</p>
					<input
						type='text'
						name='subject'
						onChange={this.handleInputChange}
						value={toSend.subject}
					/>
					<p className='form-p'>Your Message:</p>

					<textarea
						id='w3review'
						name='message'
						value={toSend.message}
						rows='4'
						cols='50'
						onChange={this.handleInputChange}></textarea>
					<div className='send-container'>
						<button className='primary' id='send' onClick={this.handleSubmit}>
							Send
						</button>
					</div>
				</div>
			</section>
		);
	}
}

export default LightDarkConstactSection;

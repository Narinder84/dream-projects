/** @format */

import React from 'react';

import contactDay from '../../../../img/undraw_contact_us_day.svg';
import contactNight from '../../../../img/undraw_contact_us_night.svg';

import './lightDark.contacts.styles.css';

const LightDarkConstactSection = ({
	ismailsent,
	handleInputChange,
	toSend,
	handleSubmit,
	isLightMode,
}) => {
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
					onChange={handleInputChange}
					value={toSend.name}
				/>
				<p className='form-p'>Email:</p>
				<input
					type='email'
					name='email'
					onChange={handleInputChange}
					value={toSend.email}
				/>
				<p className='form-p'>Subject:</p>
				<input
					type='text'
					name='subject'
					onChange={handleInputChange}
					value={toSend.subject}
				/>
				<p className='form-p'>Your Message:</p>

				<textarea
					id='w3review'
					name='message'
					value={toSend.message}
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

export default LightDarkConstactSection;

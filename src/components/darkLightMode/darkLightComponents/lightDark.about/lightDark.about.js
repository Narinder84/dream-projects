/** @format */

import React from 'react';

import './lightDark.about.styles.css';
import aboutDay from '../../../../img/undraw_about_me_day.svg';

import aboutNight from '../../../../img/undraw_about_me_night.svg';

const LightDarkAbout = ({ isLightMode }) => {
	return (
		<section id='about'>
			<div className='about-container'>
				<div className='skills-container'>
					<h1>About</h1>
					<img
						src={isLightMode ? aboutDay : aboutNight}
						alt='Idea'
						id='image3'
					/>
					<div
						className={`text-box ${
							isLightMode === false ? ' dark-text-box' : null
						}`}
						id='text-box'>
						<p>
							Narinder has experience in developing React Apps. He has an
							extensive knowledge of JavaScript, CSS, SASS, HTML, React,
							React-Router, Redux, Redux-Thunks. He also have significant
							experience with popular libraries and frameworks such as
							Bootstrap, Material UI and implementing CSS in JavaScript with
							Styled component library.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default React.memo(LightDarkAbout);

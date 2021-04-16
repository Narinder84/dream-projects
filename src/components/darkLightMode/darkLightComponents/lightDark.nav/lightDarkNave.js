/** @format */

import react from 'react';

import './lightDark.nav.styles.css';

const LightDarkNave = ({ handleChange, isLightMode, sliderCheckedRef }) => {
	return (
		<>
			<div className='theme-switch-wrapper' onChange={handleChange}>
				<span id='toggle-icon'>
					<span className='toggle-text'>
						{isLightMode ? `Light Mode` : 'Dark Mode'}
					</span>
					{isLightMode ? (
						<i className='fas fa-sun' />
					) : (
						<i class='fas fa-moon' />
					)}
				</span>
				<label className='theme-switch'>
					<input ref={sliderCheckedRef} type='checkbox' />
					<div className='slider round' />
				</label>
			</div>
			;
			<nav
				id='nav'
				className={` ${isLightMode === false ? 'nav-dark' : null} `}>
				<a className='na' href='#home'>
					HOME
				</a>
				<a className='na' href='#about'>
					ABOUT
				</a>
				<a className='na' href='#skills'>
					SkILLS
				</a>
				<a className='na' href='#projects'>
					PROJECTS
				</a>
				<a className='na' href='#contact'>
					CONTACT
				</a>
			</nav>
		</>
	);
};

export default LightDarkNave;

/** @format */

import React from 'react';

import './lightDark.nav.styles.css';

const LightDarkNave = ({ handleChange, isLightMode, sliderCheckedRef }) => {
	return (
		<>
			<nav
				id='nav'
				className={` ${isLightMode === false ? 'nav-dark' : null} `}>
				<div className='left'>
					<a className='na' href='#home'>
						HOME
					</a>
					<a className='na' href='#about'>
						ABOUT
					</a>
					<a className='na' href='#skills'>
						SKILLS
					</a>
					<a className='na' href='#projects'>
						PROJECTS
					</a>
					<a className='na' href='#contact'>
						CONTACT
					</a>
				</div>
				<div className='right'>
					<div className='theme-switch-wrapper' onChange={handleChange}>
						<span id='toggle-icon'>
							<span className='toggle-text'>
								{isLightMode ? `Light Mode` : 'Dark Mode'}
							</span>
							{isLightMode ? (
								<i className='fas fa-sun' />
							) : (
								<i className='fas fa-moon ' />
							)}
						</span>
						<label className='theme-switch'>
							<input ref={sliderCheckedRef} type='checkbox' />
							<div className='slider round' />
						</label>
					</div>
				</div>
			</nav>
		</>
	);
};

export default React.memo(LightDarkNave);

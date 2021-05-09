/** @format */

import React from 'react';
import './home.styles.scss';

import reactLogoLight from '../../../../img/undraw_react_light.svg';
import reactLogDark from '../../../../img/undraw_react_y7wq.svg';

const HomeSection = ({ isLightMode }) => {
	return (
		<>
			<section id='home'>
				<div className='title-group' id='tit'>
					<h1 id='h'>Hi,welcome to NARINDER'S personal website. </h1>
					<h2 className='all'> React Developer.</h2>

					<img
						src={isLightMode ? reactLogoLight : reactLogDark}
						alt='Idea'
						id='image3'
					/>
				</div>
			</section>
		</>
	);
};

export default React.memo(HomeSection);

/** @format */
import React from 'react';
import './navigation.style.css';

import infi from '../../img/infinite scroller.png';
import picture from '../../img/Picture in picture.png';
import jokeTeller from '../../img/jockteller.png';
import quote from '../../img/qoute.png';
class NavigationBar extends React.Component {
	componentDidMount() {
		const status = sessionStorage.getItem('isLightMode');

		if (status === 'false') {
			this.handleSwitch(false);
		} else {
			this.handleSwitch(true);
		}
	}
	handleSwitch = (checkStatus) => {
		if (checkStatus === false) {
			document.documentElement.setAttribute('data-theme', 'dark');

			sessionStorage.setItem('isLightMode', false);
		}
		if (checkStatus === true) {
			document.documentElement.setAttribute('data-theme', 'light');

			sessionStorage.setItem('isLightMode', true);
		}
	};
	render() {
		return (
			<div className='nav-container'>
				<a class='back na' id='back' href='/'>
					Back
				</a>

				<div className='j-projects'>
					<div className='image-container' id='image-container'>
						<p>Infinite Scroll</p>
						<img src={infi} alt='Idea' id='work' />
						<a href='infiniteScroll' className='tag'>
							<button className='primary' id='project-btn'>
								See
							</button>
						</a>
					</div>
					<div className='image-container' id='image-container'>
						<p>Picture in Picture</p>
						<img src={picture} alt='Idea' id='work' />
						<a href='picture' className='tag'>
							<button className='primary' id='project-btn'>
								See
							</button>
						</a>
					</div>
					<div className='image-container' id='image-container'>
						<p>Jock Teller</p>
						<img src={jokeTeller} alt='Idea' id='work' />
						<a href='jokeTeller' className='tag'>
							<button className='primary' id='project-btn'>
								See
							</button>
						</a>
					</div>
					<div className='image-container' id='image-container'>
						<p>Quotes</p>
						<img src={quote} alt='Idea' id='work' />
						<a href='quote' className='tag'>
							<button className='primary' id='project-btn'>
								See
							</button>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default NavigationBar;

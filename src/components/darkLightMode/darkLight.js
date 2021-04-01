/** @format */

import React from 'react';
import im from './img/undraw_feeling_proud_light.svg';
import proudecoder from './img/undraw_proud_coder_light.svg';
import conceptualIdea from './img/undraw_conceptual_idea_light.svg';
import imDark from './img/undraw_feeling_proud_dark.svg';
import proudecoderDark from './img/undraw_proud_coder_dark.svg';
import conceptualIdeaDark from './img/undraw_conceptual_idea_dark.svg';
import './darkLight.style.css';

class DarkAndLight extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleText: 'Light Mode',
			isLightMode: true,
			val: '',
		};
		this.sliderChecked = React.createRef();
	}
	componentDidMount() {
		const status = localStorage.getItem('isLightMode');

		if (status === 'false') {
			this.sliderChecked.current.checked = true;
			this.handleSwitch(false);
			this.setState({ ...this.state, isLightMode: false });
		} else {
			this.handleSwitch(true);
		}
	}
	handleSwitch = (checkStatus) => {
		if (checkStatus === false) {
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('isLightMode', false);
		}
		if (checkStatus === true) {
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('isLightMode', true);
		}
	};
	handleChange = (e) => {
		this.setState(
			{
				...this.state,
				isLightMode: !this.state.isLightMode,
				val: this.sliderChecked.current.checked,
			},
			() => {
				this.handleSwitch(this.state.isLightMode);
			},
		);
	};

	render() {
		return (
			<>
				<div class='theme-switch-wrapper' onChange={this.handleChange}>
					<span id='toggle-icon'>
						<span class='toggle-text'>
							{this.state.isLightMode ? `Light Mode` : 'Dark Mode'}
						</span>
						{this.state.isLightMode ? (
							<i class='fas fa-sun' />
						) : (
							<i class='fas fa-moon' />
						)}
					</span>
					<label class='theme-switch'>
						<input ref={this.sliderChecked} type='checkbox' />
						<div class='slider round' />
					</label>
				</div>
				;
				<nav
					id='nav'
					className={` ${
						this.state.isLightMode === false ? 'nav-dark' : null
					} `}>
					<a href='#home'>HOME</a>
					<a href='#about'>ABOUT</a>
					<a href='#projects'>PROJECTS</a>
					<a href='#contact'>CONTACT</a>
				</nav>
				<section id='home'>
					<div className='title-group'>
						<h1>Custom Title Here</h1>
						<h2>Welcome to the website</h2>
					</div>
				</section>
				<section id='about'>
					<h1>Undraw Illustrations</h1>
					<div class='about-container'>
						<div class='image-container'>
							<h2>Web Innovation</h2>
							<img
								src={this.state.isLightMode ? proudecoder : proudecoderDark}
								alt=''
								width='500'
								height='600'
							/>
						</div>
						<div class='image-container'>
							<h2>Problem Solving</h2>
							<img
								src={this.state.isLightMode ? im : imDark}
								alt='Proud Coder'
								id='image2'
							/>
						</div>
						<div class='image-container'>
							<h2>High Concept</h2>
							<img
								src={
									this.state.isLightMode ? conceptualIdea : conceptualIdeaDark
								}
								alt='Idea'
								id='image3'
							/>
						</div>
					</div>
				</section>
				<section id='projects'>
					<h1>Buttons</h1>
					<div className='buttons'>
						<button className='primary'>Primary</button>

						<button className='secondary'>Secondary</button>

						<button className='primary' disabled>
							Primary
						</button>
						<button className='outline'>Outline</button>
						<button className='secondary outline'>Alt Outline</button>
						<button className='outline' disabled>
							Disabled
						</button>
					</div>
					<div
						className={`text-box ${
							this.state.isLightMode === false ? ' dark-text-box' : null
						}`}
						id='text-box'>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Architecto accusamus, corrupti voluptates, sint libero quis autem
							labore aliquid pariatur saepe sed alias quisquam suscipit
							laudantium fugit perspiciatis tempora cumque dolorum?
						</p>
					</div>
				</section>
				<section id='contact'></section>
			</>
		);
	}
}

export default DarkAndLight;

<div className='theme-switch-wrapper'>
	<span className='toggle-icon'>
		<span className='toggle-text'>Light Mode</span>
		<i className='fas fa-sun' />
	</span>
	<label className='theme-switch'>
		<input type='check-box' className='check-box' />
		<div className='slider round '> </div>
	</label>
</div>;

<div class='theme-switch-wrapper'>
	<span id='toggle-icon'>
		<span class='toggle-text'>Light Mode</span>
		<i class='fas fa-sun' />
	</span>
	<label class='theme-switch'>
		<input type='checkbox' />
		<div class='slider round' />
	</label>
</div>;

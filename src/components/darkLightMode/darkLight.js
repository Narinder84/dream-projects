/** @format */

import React from 'react';
import { sendMail } from './utills';
// import im from './img/undraw_feeling_proud_light.svg';
// import proudecoder from './img/undraw_proud_coder_light.svg';
// import conceptualIdea from './img/undraw_conceptual_idea_light.svg';
// import imDark from './img/undraw_feeling_proud_dark.svg';
// import proudecoderDark from './img/undraw_proud_coder_dark.svg';
// import conceptualIdeaDark from './img/undraw_conceptual_idea_dark.svg';
import reactLogoLight from './img/undraw_react_light.svg';
import programmimgDay from './img/undraw_programming_forDay.svg';
import programmimgNight from './img/undraw_programming_forNight.svg';
import recatLogDark from './img/undraw_react_y7wq.svg';
import projectsDay from './img/undraw_Project_completed_day.svg';
import projectsNight from './img/undraw_Project_completed_night.svg';
import contactDay from './img/undraw_contact_us_day.svg';
import contactNight from './img/undraw_contact_us_night.svg';
import aboutDay from './img/undraw_about_me_day.svg';
import aboutNight from './img/undraw_about_me_night.svg';
import work from './img/Crown-zip.png';
import smartBrainApp from './img/smart brain.png';
import allProjects from './img/Allprojrcts.png';

import './darkLight.style.css';

class DarkAndLight extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleText: 'Light Mode',
			isLightMode: true,
			val: '',
			name: '',
			email: '',
			subject: '',
			message: '',
			ismailsent: '',
		};
		this.sliderChecked = React.createRef();
	}
	componentDidMount() {
		const status = sessionStorage.getItem('isLightMode');

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

			sessionStorage.setItem('isLightMode', false);
		}
		if (checkStatus === true) {
			document.documentElement.setAttribute('data-theme', 'light');

			sessionStorage.setItem('isLightMode', true);
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
	handleInputChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	handleSubmit = async () => {
		const { name, email, subject, message } = this.state;
		// sendMail();
		if (name && email && subject && message) {
			console.log(name, email, subject, message);
			return window.Email.send({
				Host: 'smtp.sendgrid.net',
				Username: 'reacts414@gmail.com',
				Password: 'GMEdhyqQQvqEpVDTELXOaw',
				To: 'getdev84@gmail.com',
				From: 'reacts414@gmail.com',
				Subject: `${subject}`,
				Body: `You got email from ${name},. The email id is ${email}. And the message is ${message}`,
			}).then((message) => {
				console.log(message);
				message === 'OK'
					? this.setState({
							ismailsent: true,
							name: '',
							email: '',
							subject: '',
							message: '',
					  })
					: this.setState({ ismailsent: false });
			});
		}
		this.setState({ ismailsent: false });
		// window.Email.send({
		// 	SecureToken: '1e2b4f1b-5aa0-4c7a-b005-5855a216a4da',
		// 	To: 'getdev84@gmail.com',
		// 	From: 'reacts414@gmail.com',
		// 	Subject: 'This is the subject',
		// 	Body: 'And this is the body',
		// }).then((message) => alert(message));
	};
	handleProject = (val) => {
		const url = val;
		window.open(url);
	};
	render() {
		console.log(this.state.ismailsent === '');
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
					<a class='na' href='#home'>
						HOME
					</a>
					<a class='na' href='#about'>
						ABOUT
					</a>
					<a class='na' href='#skills'>
						Skills
					</a>
					<a class='na' href='#projects'>
						PROJECTS
					</a>
					<a class='na' href='#contact'>
						CONTACT
					</a>
				</nav>
				<div className='all-sections'>
					<section id='home'>
						<div className='title-group' id='tit'>
							<h1>Hi,welcome to NARINDER'S personal website. </h1>
							<h2> React Developer.</h2>

							<img
								src={this.state.isLightMode ? reactLogoLight : recatLogDark}
								alt='Idea'
								id='image3'
							/>
						</div>
					</section>
					<section id='about'>
						<div class='about-container'>
							<div className='skills-container'>
								<h1>About</h1>
								<img
									src={this.state.isLightMode ? aboutDay : aboutNight}
									alt='Idea'
									id='image3'
								/>
								<div
									className={`text-box ${
										this.state.isLightMode === false ? ' dark-text-box' : null
									}`}
									id='text-box'>
									<p>
										Narinder has experience in developing React Apps. He has an
										extensive knowledge of JavaScript, CSS, SASS, HTML, React,
										React-Router, Redux, Redux-Thunks. He also have significant
										experience with popular libraries and frameworks such as
										Bootstrap, Material UI and implementing CSS in JavaScript
										with Styled component library.
									</p>
								</div>
							</div>
						</div>
					</section>
					<section id='skills'>
						<h1>Skills</h1>
						<div class='about-container'>
							<img
								src={this.state.isLightMode ? programmimgDay : programmimgNight}
								alt='Idea'
								id='image3'
							/>
						</div>
						<div
							className={`text-box text-box-len   ${
								this.state.isLightMode === false ? ' dark-text-box' : null
							}`}>
							<div className='lan'>
								<p className='lan-section-first' id='first'>
									Languages:
								</p>
								<span className='lan-section'>
									<p> Java Script , Python, HTML, CSS, SQL</p>
								</span>
							</div>
							<div className='lan'>
								<p className='lan-section-first' id='first'>
									Libraries:
								</p>
								<span className='lan-section'>
									<p>
										React, React-Router, React-Redux, Redux-Thunk, Sagas,
										Material UI, Bootstrap, StyledComponent, CSS-Grid, CSS-Flex
										Box, SASS
									</p>
								</span>
							</div>
							<div className='lan'>
								<p className='lan-section-first' id='first'>
									Data Base:
								</p>
								<span className='lan-section'>
									<p>SQL Server, MySQL, Postgres, Mongo DB, FireBase, Redise</p>
								</span>
							</div>
							<div className='lan'>
								<p className='lan-section-first' id='first'>
									Methodologies:
								</p>
								<span className='lan-section'>
									<p>
										Agile Software Development, REST API, Software design
										patterns, Circle CI
									</p>
								</span>
							</div>
						</div>
					</section>
					<section id='projects'>
						<h1>Projects</h1>
						<div className='image-container-project'>
							<img
								src={this.state.isLightMode ? projectsDay : projectsNight}
								alt='Idea'
								id='project'
							/>
						</div>
						<div className='project-container'>
							<div className='project-wrapper'>
								<div className='project-all'>
									<div className='image-container' id='image-container'>
										<p>Crown-zip. An e-commerce project</p>
										<img src={work} alt='Idea' id='work' />
										<button
											className='primary'
											id='project-btn'
											onClick={() =>
												this.handleProject('https://crown-zip.herokuapp.com/')
											}>
											See
										</button>
									</div>
									<div className='description'>
										<div
											id='text-box-len-project'
											className={`text-box text-box-len   ${
												this.state.isLightMode === false
													? ' dark-text-box'
													: null
											}`}>
											<p>
												Crown Cloths – ecommerce app An online shopping app.
												Resalable UI components are created with class and
												functional concepts of React. All UIs are created using
												CSS3, CSS-Grid, and Flex-Box. React-Router is
												implemented for smooth navigation. Managed state and API
												calls with Readux-Thunk. State persistence is
												implemented in the web app with local storage for batter
												user experience. Optimized app using React-lazy and
												reselect library with Redux. Deployed on heroku.
												<br></br> Live project :- https:/crown-zip.herokuapp.com{' '}
												<br></br> Can see code :-
												https://github.com/Narinder84/masterCrown
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='project-all'>
								<div className='image-container' id='image-container'>
									<p>Face Recognition app</p>
									<img src={smartBrainApp} alt='Idea' id='work' />
									<button
										className='primary'
										id='project-btn'
										onClick={() =>
											this.handleProject(
												'https://go-smart-brain-live.herokuapp.com/',
											)
										}>
										See
									</button>
								</div>
								<div className='description'>
									<div
										id='text-box-len-project'
										className={`text-box text-box-len   ${
											this.state.isLightMode === false ? ' dark-text-box' : null
										}`}>
										<p>
											Smart Brain app - Face recognition app A face recognition
											app. Back end created with Nodejs Express. Hooked with
											Postgres. REST API’s methodology used to connect with
											client. Passwords security managed with hashing technique
											using bcrypt library. Clarifia API used for face
											recognition.UI created with React. Deployed on heroku.
											<br></br> Live project: - Smart Brain App
											(go-smart-brain-live.herokuapp.com). <br></br> Back –End
											Code: - https://github.com/Narinder84/server.<br></br>{' '}
											Front -End Code:-
											https://github.com/Narinder84/smart-brain.
										</p>
									</div>
								</div>
							</div>
							<div className='project-all'>
								<div className='image-container' id='image-container'>
									<p>Other UI Projects in Java Script</p>
									<img src={allProjects} alt='Idea' id='work' />
									<a href='/projects' className='tag'>
										<button className='primary' id='project-btn'>
											See
										</button>
									</a>
								</div>
								<div className='description'>
									<div
										id='text-box-len-project'
										className={`text-box text-box-len   ${
											this.state.isLightMode === false ? ' dark-text-box' : null
										}`}>
										<p>
											UIs created with vanilla javaScript.All compnets are
											create by using HTML5, CSS3, CSS-Grid. No third party
											libraries usied. These projects are create using AIPs.
											<br></br>
											<h3>Project Names :</h3>
											<li>Picture in Picture</li>
											<li>Jock Teller</li>
											<li>Quotes</li>
											<li>Infinite Scrolling</li>
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* <div className='buttons'>
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
					</div> */}
					</section>
					<section id='contact'>
						<h1>Contact</h1>
						<img
							src={this.state.isLightMode ? contactDay : contactNight}
							alt='Idea'
							id='image3'
						/>
						<div className='image-container' id='contact-form'>
							{this.state.ismailsent === '' ? (
								<h2>Send Message</h2>
							) : this.state.ismailsent === true ? (
								<h2>Message has been sent. Thanks for showing intrest.</h2>
							) : this.state.ismailsent === false ? (
								<h2 id='fault'>Somethig missing.</h2>
							) : null}
							<p>Name: </p>
							<input
								type='text'
								name='name'
								onChange={this.handleInputChange}
								value={this.state.name}
							/>
							<p>Email:</p>
							<input
								type='email'
								name='email'
								onChange={this.handleInputChange}
								value={this.state.email}
							/>
							<p>Subject:</p>
							<input
								type='text'
								name='subject'
								onChange={this.handleInputChange}
								value={this.state.subject}
							/>
							<p>Your Message:</p>

							<textarea
								id='w3review'
								name='message'
								value={this.state.message}
								rows='4'
								cols='50'
								onChange={this.handleInputChange}></textarea>
							<div className='send-container'>
								<button
									className='primary'
									id='send'
									onClick={this.handleSubmit}>
									Send
								</button>
							</div>
						</div>
					</section>
				</div>
			</>
		);
	}
}

export default DarkAndLight;

{
	/* <div className='theme-switch-wrapper'>
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
</div>; */
}

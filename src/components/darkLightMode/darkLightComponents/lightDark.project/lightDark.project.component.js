/** @format */

import React from 'react';

import './lightDark.project.styles.css';
import projectsDay from '../../../../img/undraw_Project_completed_day.svg';

import projectsNight from '../../../../img/undraw_Project_completed_night.svg';
import work from '../../../../img/Crown-zip.png';
import smartBrainApp from '../../../../img/smart brain.png';
import allProjects from '../../../../img/Allprojrcts.png';

const LightDarkProjectSection = ({ isLightMode, handleProject }) => {
	console.log('====Project=====');
	return (
		<section id='projects'>
			<h1>Projects</h1>
			<div className='image-container-project'>
				<img
					src={isLightMode ? projectsDay : projectsNight}
					alt='Idea'
					id='project'
				/>
			</div>
			<div className='project-container'>
				<div className='project-all'>
					<div className='image-container pro' id='image-container-1'>
						<p>Crown-zip. An e-commerce project</p>
						<img src={work} alt='Idea' id='work' />
						<div className='btn-wr'>
							<button
								className='primary'
								id='project-btn'
								onClick={() =>
									handleProject('https://crown-zip.herokuapp.com/')
								}>
								Live
							</button>
						</div>
					</div>
					<div className='description'>
						<div
							id='text-box-len-project'
							className={`text-box text-box-len   ${
								isLightMode === false ? ' dark-text-box' : null
							}`}>
							<p>
								Crown Cloths –An online shopping app. Resalable UI components
								are created with class and functional concepts of React. All UIs
								are created using CSS3, CSS-Grid, and Flex-Box. React-Router is
								implemented for smooth navigation. Managed state and API calls
								with Readux-Thunk. State persistence is implemented in the web
								app with local storage for batter user experience. Optimized app
								using React-lazy and reselect library with Redux. Deployed on
								heroku.<br></br> <span className='in'>Live project :- </span>
								<br /> https:/crown-zip.herokuapp.com <br></br>{' '}
								<span className='in'>Code:-</span> <br />{' '}
								<p>https://github.com/Narinder84/masterCrown</p>
							</p>
						</div>
					</div>
				</div>
				<div className='project-all'>
					<div className='image-container pro' id='image-container-1'>
						<p>Face Recognition app</p>
						<img src={smartBrainApp} alt='Idea' id='work' />
						<div className='btn-wr'>
							<button
								className='primary'
								id='project-btn'
								onClick={() =>
									handleProject('https://go-smart-brain-live.herokuapp.com/')
								}>
								Live
							</button>
						</div>
					</div>
					<div className='description'>
						<div
							id='text-box-len-project'
							className={`text-box text-box-len   ${
								isLightMode === false ? ' dark-text-box' : null
							}`}>
							<p>
								Smart Brain app - Face recognition app A face recognition app.
								Back end created with Nodejs Express. Hooked with Postgres. REST
								API’s methodology used to connect with client. Passwords
								security managed with hashing technique using bcrypt library.
								Clarifia API used for face recognition.UI created with React.
								Deployed on heroku.
								<br></br> <span className='in'>Live:-</span>
								<br />
								https://go-smart-brain-live.herokuapp.com/ <br></br>{' '}
								<span className='in'>Back–End Code:-</span>
								<br />
								https://github.com/Narinder84/server.
								<br></br> <span className='in'>Front-End Code:-</span>
								<br />
								https://github.com/Narinder84/smart-brain.
							</p>
						</div>
					</div>
				</div>
				<div className='project-all'>
					<div className='image-container' id='image-container'>
						<p>Other UI Projects </p>
						<img src={allProjects} alt='Idea' id='work' />
						<div className='btn-wr'>
							<a href='/projects' className='tag'>
								<button className='primary' id='project-btn'>
									Live
								</button>
							</a>
						</div>
					</div>

					<div className='description'>
						<div
							id='text-box-len-project'
							className={`text-box text-box-len   ${
								isLightMode === false ? ' dark-text-box' : null
							}`}>
							<p>
								UIs created with React.All components are create by using HTML5,
								CSS3, CSS-Grid. No third party libraries used. These projects
								are create using AIPs.
								<br></br>
								<li className='heading'>Project Names</li>
								<li>Picture in Picture</li>
								<li>Jock Teller</li>
								<li>Quotes</li>
								<li>Infinite Scrolling</li>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default React.memo(LightDarkProjectSection);

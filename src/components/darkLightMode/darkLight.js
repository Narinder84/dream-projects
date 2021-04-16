/** @format */

import React from 'react';
import { send } from 'emailjs-com';
// import { sendMail } from './utills';
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
import LightDarkNave from './darkLightComponents/lightDark.nav/lightDarkNave';
import LightDarkHomeSection from './darkLightComponents/lightDark.home/lightDark.home.component';
import LightDarkAboutSection from './darkLightComponents/lightDark.about/lightDark.about';
import LightDarkSkillsSection from './darkLightComponents/lightDarkSkills/lightDarkSkills.component';
import LightDarkProjectSection from './darkLightComponents/lightDark.project/lightDark.project.component';
import LightDarkConstactSection from './darkLightComponents/lightDark.contacts/lightDark.contacts.component';

class DarkAndLight extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggleText: 'Light Mode',
			isLightMode: true,
			val: '',

			ismailsent: '',
			toSend: {
				name: '',
				email: '',
				subject: '',
				message: '',
			},
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
		const newToSend = { ...this.state.toSend, [name]: value };
		this.setState({ ...this.state, toSend: newToSend });
	};
	handleSubmit = async () => {
		const { name, email, subject, message } = this.state.toSend;
		console.log(this.state);
		// sendMail();
		if (name && email && subject && message) {
			console.log(name, email, subject, message);

			send(
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
	};
	handleProject = (val) => {
		const url = val;
		window.open(url);
	};
	render() {
		return (
			<>
				<LightDarkNave
					isLightMode={this.state.isLightMode}
					sliderCheckedRef={this.sliderChecked}
					handleChange={this.handleChange}
				/>
				<div className='all-sections'>
					<LightDarkHomeSection isLightMode={this.state.ismailsent} />
					<LightDarkAboutSection isLightMode={this.state.isLightMode} />
					<LightDarkSkillsSection isLightMode={this.state.isLightMode} />
					{/* ================== projects======================================================= */}
					<LightDarkProjectSection
						isLightMode={this.state.isLightMode}
						handleChange={this.handleChange}
					/>
					<LightDarkConstactSection
						ismailsent={this.state.ismailsent}
						handleInputChange={this.handleInputChange}
						toSend={this.state.toSend}
						handleSubmit={this.handleSubmit}
						isLightMode={this.state.isLightMode}
					/>
				</div>
			</>
		);
	}
}

export default DarkAndLight;

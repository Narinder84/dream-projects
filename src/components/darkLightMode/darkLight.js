/** @format */

import React from 'react';
import { send } from 'emailjs-com';

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
			return send(
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
		this.setState({ ismailsent: false });
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
				<LightDarkHomeSection isLightMode={this.state.ismailsent} />
				<LightDarkAboutSection isLightMode={this.state.isLightMode} />
				<LightDarkSkillsSection isLightMode={this.state.isLightMode} />
				<LightDarkProjectSection
					isLightMode={this.state.isLightMode}
					handleProject={this.handleProject}
				/>
				<LightDarkConstactSection
					ismailsent={this.state.ismailsent}
					handleInputChange={this.handleInputChange}
					toSend={this.state.toSend}
					handleSubmit={this.handleSubmit}
					isLightMode={this.state.isLightMode}
				/>
			</>
		);
	}
}

export default DarkAndLight;

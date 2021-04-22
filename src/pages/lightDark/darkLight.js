/** @format */

import React from 'react';

import './darkLight.style.css';
import LightDarkNave from '../../components/darkLightMode/darkLightComponents/lightDark.nav/lightDarkNave';
import LightDarkHomeSection from '../../components/darkLightMode/darkLightComponents/lightDark.home/lightDark.home.component';
import LightDarkAboutSection from '../../components/darkLightMode/darkLightComponents/lightDark.about/lightDark.about';
import LightDarkSkillsSection from '../../components/darkLightMode/darkLightComponents/lightDarkSkills/lightDarkSkills.component';
import LightDarkProjectSection from '../../components/darkLightMode/darkLightComponents/lightDark.project/lightDark.project.component';
import LightDarkConstactSection from '../../components/darkLightMode/darkLightComponents/lightDark.contacts/lightDark.contacts.component';

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
				<LightDarkConstactSection isLightMode={this.state.isLightMode} />
			</>
		);
	}
}

export default DarkAndLight;

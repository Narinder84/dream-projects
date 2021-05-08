/** @format */

import React, { useEffect, useState, useCallback } from 'react';

// import './darkLight.style.css';
import './style.scss';
import LightDarkNave from '../../components/darkLightMode/darkLightComponents/lightDark.nav/lightDarkNave';
import LightDarkHomeSection from '../../components/darkLightMode/darkLightComponents/lightDark.home/lightDark.home.component';
import LightDarkAboutSection from '../../components/darkLightMode/darkLightComponents/lightDark.about/lightDark.about';
import LightDarkSkillsSection from '../../components/darkLightMode/darkLightComponents/lightDarkSkills/lightDarkSkills.component';
import LightDarkProjectSection from '../../components/darkLightMode/darkLightComponents/lightDark.project/lightDark.project.component';
import LightDarkConstactSection from '../../components/darkLightMode/darkLightComponents/lightDark.contacts/lightDark.contacts.component';

const DarkAndLight = () => {
	// constructor(props) {
	// 	super(props);
	// 	state = {
	// 		toggleText: 'Light Mode',
	// 		isLightMode: true,
	// 		val: '',
	// 	};
	// 	this.sliderChecked = React.createRef();
	// }
	const sliderChecked = React.createRef();
	const [state, setState] = useState({
		toggleText: 'Light Mode',
		isLightMode: true,
		val: '',
	});

	// componentDidMount() {
	// 	const status = sessionStorage.getItem('isLightMode');

	// 	if (status === 'false') {
	// 		this.sliderChecked.current.checked = true;
	// 		this.handleSwitch(false);
	// 		this.setState({ ...this.state, isLightMode: false });
	// 	} else {
	// 		this.handleSwitch(true);
	// 	}
	// }
	useEffect(() => {
		const status = sessionStorage.getItem('isLightMode');

		if (status === 'false') {
			sliderChecked.current.checked = true;
			handleSwitch(false);
			setState({ ...state, isLightMode: false });
		} else {
			handleSwitch(true);
		}
	}, []);
	const handleSwitch = (checkStatus) => {
		if (checkStatus === false) {
			document.documentElement.setAttribute('data-theme', 'dark');

			sessionStorage.setItem('isLightMode', false);
		}
		if (checkStatus === true) {
			document.documentElement.setAttribute('data-theme', 'light');

			sessionStorage.setItem('isLightMode', true);
		}
	};
	const handleChange = (e) => {
		setState({
			...state,
			isLightMode: !state.isLightMode,
			val: sliderChecked.current.checked,
		});
	};
	useEffect(() => {
		handleSwitch(state.isLightMode);
	}, [state.isLightMode]);

	const handleProject = useCallback((url) => {
		window.open(url);
	}, []);

	return (
		<>
			<LightDarkNave
				isLightMode={state.isLightMode}
				sliderCheckedRef={sliderChecked}
				handleChange={handleChange}
			/>
			<LightDarkHomeSection isLightMode={state.isLightMode} />
			<LightDarkAboutSection isLightMode={state.isLightMode} />
			<LightDarkSkillsSection isLightMode={state.isLightMode} />
			<LightDarkProjectSection
				isLightMode={state.isLightMode}
				handleProject={handleProject}
			/>
			<LightDarkConstactSection isLightMode={state.isLightMode} />
		</>
	);
};

export default React.memo(DarkAndLight);

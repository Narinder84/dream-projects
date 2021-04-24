/** @format */

import React from 'react';
import { getJock } from './jockTeller.utills';
import './jockTeller.style.css';

class JockTeller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			voices: [],
			joke: 'Hey HOW ARE YOU ! I can tel you a joke',
		};

		this.voiceList = React.createRef();
		this.button = React.createRef();
	}

	// componentDidMount() {
	// 	const getVoicesList = () => {
	// 		const voices = window.speechSynthesis.getVoices();
	// 		this.setState({ voices: voices });
	// 	};
	// 	getVoicesList();

	// 	if (speechSynthesis !== undefined) {
	// 		speechSynthesis.onvoiceschanged = getVoicesList;
	// 	}
	// 	console.log('mount======');
	// 	window.addEventListener('load', (event) => {
	// 		console.log('page is fully loaded');

	// 		this.handelLoad();
	// 	});
	// }
	handelLoad = async () => {
		let toSpeek = new SpeechSynthesisUtterance(this.state.joke);

		// toSpeek.voice = this.state.voices[0];
		let tts = window.speechSynthesis;
		tts.speak(toSpeek);
	};
	handelClick = async () => {
		const joke = await getJock();

		this.setState(
			() => ({ joke: joke }),
			() => {
				let toSpeek = new SpeechSynthesisUtterance(this.state.joke);

				// toSpeek.voice = this.state.voices[0];
				let tts = window.speechSynthesis;
				tts.speak(toSpeek);
			},
		);
	};
	render() {
		return (
			<div className='container' onLoad={this.handelLoad}>
				<div className='home-container'>
					<a href='/projects'>Home</a>
				</div>
				<div className='robot' />
				<div className='jock-page'>
					<audio id='audio' controls hidden></audio>
					{/* <span id='voice-list'>
						<span id='voice-list'>Select Voice : </span>
						<select ref={this.voiceList} id='to-select'>
							{this.state.voices
								? this.state.voices.map((voice, indx) => (
										<option
											key={indx}
											data-lang={voice.lang}
											data-name={voice.name}>
											{voice.name}
										</option>
								  ))
								: null}
						</select>
					</span> */}

					<button ref={this.button} onClick={this.handelClick} id='button'>
						Tell Me A Joke
					</button>
				</div>
			</div>
		);
	}
}
export default JockTeller;

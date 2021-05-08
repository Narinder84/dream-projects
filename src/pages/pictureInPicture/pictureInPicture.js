/** @format */
import React from 'react';
import { selectMediaStream } from './picture.utills';

import './pictureain.style.css';

class Picture extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ready: false,
		};
		this.video = React.createRef();
	}

	async componentDidMount() {
		const mediaStream = await selectMediaStream();
		if (mediaStream) {
			this.video.current.srcObject = mediaStream;
			return this.setState({ ready: true });
		}
		this.setState({ ready: false });
	}
	handleLoad = () => {
		this.video.current.play();
	};
	handleClick = () => {
		const videoElm = document.getElementById('video');
		videoElm.requestPictureInPicture();
	};
	render() {
		return (
			<div className='picture-page'>
				<div className='home-container'>
					<a href='/projects'>Home</a>
				</div>
				<div className='picture-container'>
					{this.state.ready ? (
						<>
							<h2>
								If their is no shearing refresh the page to start sharing.
							</h2>
							<h2>Else click on start button to start Picture in Picture.</h2>

							<div className='btn-container'>
								<button className='btn' onClick={this.handleClick}>
									{' '}
									Start
								</button>
							</div>
						</>
					) : (
						<h2>Refresh the page to get video.</h2>
					)}
					<video
						ref={this.video}
						hidden
						id='video'
						controls
						height='360px'
						width='640px'
						onLoadedMetadata={this.handleLoad}></video>
				</div>
			</div>
		);
	}
}

export default Picture;

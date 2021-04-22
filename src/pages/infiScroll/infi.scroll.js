/** @format */

import React from 'react';
import { getPhotos } from './infi.utills';

import './infiScroll.style.css';

class InfiScroll extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			imagesLoaded: 0,
			totalPics: 0,
			ready: false,
			isApiExhausted: false,
		};
	}
	imagesLoaded = () => {
		this.setState(
			(prevState) => ({
				...prevState,
				imagesLoaded: prevState.imagesLoaded + 1,
			}),
			() => {
				if (this.state.totalPics === this.state.imagesLoaded) {
					this.setState({ ...this.state, ready: true });
				}
			},
		);
	};
	async componentDidMount() {
		const data = await getPhotos();

		if (data) {
			this.setState({ ...this.state, photos: data, totalPics: data.length });
		} else {
			this.setState({ ...this.state, isApiExhausted: true });
		}

		window.addEventListener('scroll', async () => {
			if (
				this.state.ready === true &&
				window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000
			) {
				this.setState({ ready: false }, async () => {
					const data = await getPhotos();
					if (data) {
						const newData = [...this.state.photos, ...data];
						this.setState((prevState) => ({
							...prevState,
							photos: newData,
							totalPics: newData.length,
						}));
					} else {
						this.setState({ ...this.state });
					}
				});
			}
		});
	}

	render() {
		const photos = this.state.photos;

		return (
			<div className='scroll-page'>
				<div className='home-container'>
					<a href='/projects'>Home</a>
				</div>
				<div className='heading-container'>
					<h1 className='heading'>Un Splash Infinite Scroll - API</h1>
				</div>
				{this.state.isApiExhausted ? (
					<div className='loader-continer'>
						<div className='home-container'>
							<a href='/projects'>Home</a>
						</div>
						<h1>API is Exhausted...Reached to its limit.....Try Later !!!</h1>
						<div className='loader'>
							<img src='./NewSpin.svg' alt='' />
						</div>
					</div>
				) : photos.length === 0 ? (
					<div className='loader-continer'>
						<div className='loader'>
							<img src='./NewSpin.svg' alt='' />
						</div>
					</div>
				) : (
					photos.map((pic, indx) => (
						<div className='img-div' key={indx}>
							<img src={pic.urls.regular} alt='' onLoad={this.imagesLoaded} />
						</div>
					))
				)}
			</div>
		);
	}
}
export default InfiScroll;
